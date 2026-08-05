(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- mobile nav ---------- */

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    var setNav = function (open) {
      toggle.setAttribute("aria-expanded", String(open));
      nav.setAttribute("data-open", String(open));
    };

    var closeNav = function (refocus) {
      if (toggle.getAttribute("aria-expanded") !== "true") return;
      setNav(false);
      if (refocus) toggle.focus();
    };

    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });

    /* Escape was bound to the panel, but activating the toggle leaves focus on
       the toggle — which is outside it. The one moment a keyboard user wants
       to dismiss the menu was the one moment nothing was listening. */
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav(true);
    });

    /* a tap outside, or on a link, is a dismissal too: the in-page Contact
       link used to leave the panel sitting over the section it scrolled to */
    document.addEventListener("click", function (e) {
      if (e.target.closest(".nav a")) return closeNav(false);
      if (e.target.closest(".nav, .nav-toggle")) return;
      closeNav(false);
    });

    /* the panel only exists below 760px; crossing back up strands it open */
    var wide = window.matchMedia("(min-width: 760.01px)");
    var onWide = function (e) {
      if (e.matches) closeNav(false);
    };
    if (wide.addEventListener) wide.addEventListener("change", onWide);
    else wide.addListener(onWide);
  }

  /* ---------- in-page anchors ----------
     scroll-behavior: smooth used to be declared globally, which made the
     Contact link a three-second ride and left a page loaded straight at
     #contact stranded 700px down — the fragment resolves before the fonts and
     the 265vh hero have finished laying the document out, and the browser's
     scroll animation never catches up with the target moving underneath it.

     Smoothing the click here instead means the load path can stay instant, and
     the fragment can be re-applied once layout has actually settled. */

  var jumpTo = function (hash, smooth) {
    var el = hash && hash.length > 1 && document.querySelector(hash);
    if (!el) return false;
    el.scrollIntoView({
      behavior: smooth && !reduced ? "smooth" : "auto",
      block: "start",
    });
    return true;
  };

  document.addEventListener("click", function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var hash = link.getAttribute("href");
    if (hash === "#" || !jumpTo(hash, true)) return;
    e.preventDefault();
    history.pushState(null, "", hash);
  });

  if (location.hash) {
    var settle = function () {
      jumpTo(location.hash, false);
    };
    window.addEventListener("load", settle);
    /* fonts land after load and change every heading's height under it */
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(settle);
    }
  }

  /* the inline bootstrap in <head> hid the reveal targets and armed a timer to
     un-hide them if this file never arrived. From here on that is our job, so
     the timer gets cancelled at each point where we take it over — and only at
     those points. */
  var takeOverReveals = function () {
    clearTimeout(window.revealFallback);
  };

  if (reduced || !window.gsap || !window.ScrollTrigger) {
    takeOverReveals();
    document.documentElement.classList.remove("js-reveal");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- reveals: headings rise, supporting copy fades ----------
     IntersectionObserver rather than ScrollTrigger: a scroll restore or a
     deep link jumps straight past a ScrollTrigger's start and never fires it,
     which would leave that content invisible for good. */

  var revealTargets = document.querySelectorAll(".r-rise, .r-fade");

  if (!("IntersectionObserver" in window)) {
    takeOverReveals();
    document.documentElement.classList.remove("js-reveal");
  } else {
    takeOverReveals();
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var el = entry.target;
          /* a fast flick can carry a section past the viewport before the
             observer delivers, so anything already above the fold is shown
             outright rather than left hidden behind the reader */
          var passed = entry.boundingClientRect.bottom < 0;

          if (!entry.isIntersecting && !passed) return;
          io.unobserve(el);

          if (passed) {
            gsap.set(el, { opacity: 1, y: 0 });
            return;
          }

          gsap.to(
            el,
            el.classList.contains("r-rise")
              ? { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
              : { opacity: 1, duration: 1.1, ease: "power2.out" }
          );
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    revealTargets.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---------- hero: the knight lifts, turns, and clears the name ---------- */

  var hero = document.querySelector(".hero");

  if (hero) {
    var knight = hero.querySelector(".hero__knight");
    var wordmark = hero.querySelector(".hero__wordmark");
    var cue = hero.querySelector(".hero__cue");

    gsap.set(wordmark, { opacity: 0, y: 46, scale: 0.97 });

    /* The turn is the one part of this that wants real geometry, so it is the
       only part that comes from rendered frames. Tilt, scale, lift and fade
       stay as CSS transforms on the parent, which keeps them responsive, free
       to animate, and identical whether the frames ever arrive or not.

       Both paths read the same angle out of `spin`, so the still-image
       fallback and the rendered sequence describe the same motion — the
       sequence just shows the far side of the piece instead of implying it. */
    var spin = { deg: 0 };
    var seq = null;

    function applySpin() {
      if (seq) {
        seq.draw(spin.deg);
      } else {
        gsap.set(knight, { rotateY: spin.deg });
      }
    }

    gsap
      .timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.4,
        },
        /* on the timeline, not on the ScrollTrigger. A ScrollTrigger's onUpdate
           fires when the *scroll position* changes; under scrub the playhead
           goes on easing toward its target after scrolling stops. Sampling the
           angle from there drew whatever frame the last scroll event happened
           to catch, so the piece never quite arrived — most visibly on the way
           back up, where it settled a step short of its opening pose. The
           timeline's onUpdate fires whenever the playhead itself moves. */
        onUpdate: applySpin,
      })
      .to(cue, { opacity: 0, y: 14, duration: 0.1 }, 0)
      /* Read through REST_DEG: the piece opens head-on and 390 carries it a
         full turn round to 30deg, the shallow forward three-quarter.
         The head still points left as the mark does, but turned far enough
         toward the viewer to show the front of the face rather than its edge.
         The sequence is rendered every 3deg, so 30 is the lattice point next to
         the 29 that was asked for; a degree of yaw on a piece this size is
         below what the eye resolves. */
      .to(spin, { deg: 190, ease: "none", duration: 0.34 }, 0)
      .to(spin, { deg: 390, ease: "power2.out", duration: 0.38 }, 0.34)
      .to(
        knight,
        {
          rotate: -14,
          rotateX: 8,
          scale: 1.14,
          y: "6vh",
          ease: "none",
          duration: 0.34,
        },
        0
      )
      /* It descends and settles rather than leaving. The piece stops being the
         subject and becomes the ground the name sits on, so it has to come to
         rest upright — a piece still tilted mid-fall reads as an accident
         behind static type — and drop to a weight type can be read over. */
      .to(
        knight,
        {
          rotate: 0,
          rotateX: 0,
          scale: 1.5,
          /* 26vh, not 30: the stage clips, and at 30 the base was cut by about
             15px — the same severed-base look the piece cutouts were rebuilt to
             get rid of. */
          y: "26vh",
          /* on navy a white piece needs more than the 0.3 the captures use on
             off-white; the ground is darker, so the same alpha reads fainter */
          opacity: 0.38,
          ease: "power2.out",
          duration: 0.38,
        },
        0.34
      )
      .to(
        wordmark,
        { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 0.3 },
        0.44
      )
      .to(wordmark, { duration: 0.26 }, 0.74);

    /* Loaded after the page is usable, never as part of it: two megabytes of
       turntable must not compete with the first paint for a flourish nobody has
       scrolled to yet.

       Tiled into four sheets rather than 120 loose files. That is four requests
       instead of 120, it compresses better than the frames did separately, and
       it clears the 100-file ceiling on GitHub's uploader. Thirty per sheet
       keeps any single decode near 36MB — one sheet of all 120 would be a 36
       megapixel allocation before a single frame is drawn.

       Skipped entirely below 900px, where holding the decoded turn is real
       memory on a phone for a knight two inches tall. */
    var FRAMES = 120;
    var FRAME_W = 430;
    var FRAME_H = 700;
    var COLS = 6;
    var PER_SHEET = 30;
    var SHEETS = FRAMES / PER_SHEET;
    var REST_DEG = 0;       // head-on: the piece looks straight out to open

    var canvas = knight.querySelector(".hero__spin");
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    function loadSequence() {
      if (!canvas || seq || innerWidth < 900 || reduce.matches) return;

      var sheets = [];
      var loaded = 0;
      var failed = false;

      for (var i = 0; i < SHEETS; i++) {
        var im = new Image();
        im.onload = function () {
          if (++loaded === SHEETS && !failed) ready(sheets);
        };
        // a missing sheet is thirty missing angles — a quarter of the turn
        // gone — so a failure keeps the still rather than running with holes
        im.onerror = function () {
          failed = true;
        };
        im.src = "assets/img/knight-spin/spin_" + i + ".png";
        sheets.push(im);
      }
    }

    function ready(sheets) {
      var ctx = canvas.getContext("2d");
      seq = {
        draw: function (deg) {
          // REST_DEG is the pose at the top of the page. It is a separate dial
          // from the timeline's angles so the opening can be chosen without
          // moving the landing: the lookup is offset here, and the landing
          // target below is set to compensate.
          var t = ((deg + REST_DEG) % 360 + 360) % 360;
          var i = Math.round((t / 360) * FRAMES) % FRAMES;
          if (i === seq.last) return;
          seq.last = i;
          var cell = i % PER_SHEET;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(
            sheets[(i / PER_SHEET) | 0],
            (cell % COLS) * FRAME_W,
            ((cell / COLS) | 0) * FRAME_H,
            FRAME_W,
            FRAME_H,
            0,
            0,
            canvas.width,
            canvas.height
          );
        },
        last: -1,
      };
      // the CSS rotateY the fallback was using has to go, or the frames and the
      // transform would both turn the piece
      gsap.set(knight, { rotateY: 0 });
      seq.draw(spin.deg);
      knight.classList.add("is-spinning");
    }

    if (document.readyState === "complete") loadSequence();
    else window.addEventListener("load", loadSequence);

    // A window dragged wider, or a tablet turned landscape, crosses the gate
    // after load. loadSequence returns early once `seq` exists, so re-arming it
    // here is free and it only ever fires the fetch once.
    var spinResize;
    window.addEventListener("resize", function () {
      clearTimeout(spinResize);
      spinResize = setTimeout(loadSequence, 200);
    });
  }

  /* ---------- capture: one section, one piece taken ----------
     Held by a sticky frame rather than a ScrollTrigger pin: the section is
     taller than its frame, and the overshoot is the scrubbing room. The run
     has to cross the full width to read, and unheld most of it played out
     while the section was still below the fold.

     Only the pieces animate. The copy is present from the first frame — it is
     the subject, and anything that arrived after the board drew the eye to the
     scenery first. */

  /* the mating position shares the capture's furniture but nothing is taken
     there, so it is driven separately below */
  var captures = gsap.utils.toArray(".capture:not(.mate)");

  captures.forEach(function (section) {
    var target = section.querySelector(".capture__target");
    var knight = section.querySelector(".capture__knight");
    if (!target || !knight) return;

    /* which wing the knight charges from; alternated down the page so five of
       these in a row do not read as the same shot five times */
    var dir = section.dataset.from === "left" ? -1 : 1;

    var build = function () {
      /* far enough to start at the opposite edge from where it lands, so the
         run crosses the whole section rather than nudging in from the side —
         but short of the edge itself, so it starts standing on the board
         rather than half outside it */
      var travel = section.offsetWidth * 0.55;

      /* the whole board is present the moment the section arrives. Fading the
         knight and the copy in staggered the eye onto the target first, which
         read as the pawn being the subject. */
      gsap.set(knight, { x: dir * travel, rotate: -dir * 5 });
      gsap.set(target, { rotate: 0, x: 0 });

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          /* exactly the window the frame is stuck for, so the whole run plays
             against a section that fills the screen */
          start: "top top",
          end: "bottom bottom",
          /* seconds the motion takes to catch the scrollbar. Low values
             track the wheel exactly, which is what made a fast scroll fling
             the pieces through the move; this lets a flick arrive as a
             settle instead. */
          scrub: 1.5,
        },
      });

      /* Positions below are written as fractions of the section's scroll, which
         only holds while the timeline's total duration is exactly 1 — scrub maps
         the whole timeline onto the range whatever its length. The tail pad at
         the end is what keeps that true. */

      /* approach — closing the distance, leaning further forward as it comes */
      tl.to(
        knight,
        {
          x: dir * travel * 0.1,
          rotate: -dir * 13,
          ease: "power1.in",
          duration: 0.5,
        },
        0
      )
        /* contact — the knight snaps through, the target pivots off its base */
        .to(
          knight,
          { x: 0, rotate: -dir * 22, ease: "power3.in", duration: 0.06 },
          0.5
        )
        .to(
          target,
          { rotate: -dir * 80, x: -dir * 8, ease: "power2.in", duration: 0.14 },
          0.53
        )
        /* settle — it drops the last few degrees and stops dead */
        .to(
          target,
          { rotate: -dir * 88, ease: "power1.out", duration: 0.1 },
          0.67
        )
        /* the knight rights itself on the square it just took */
        .to(knight, { rotate: -dir * 6, ease: "power2.out", duration: 0.24 }, 0.6);

      /* hold the settled frame for the rest of the section, and pin the total
         duration to 1 so every position above means what it says */
      tl.to({}, { duration: 0.01 }, 0.99);

      return tl;
    };

    var tl = build();

    var t;
    window.addEventListener("resize", function () {
      clearTimeout(t);
      t = setTimeout(function () {
        if (tl.scrollTrigger) tl.scrollTrigger.kill();
        tl.kill();
        gsap.set([knight, target], { clearProps: "all" });
        tl = build();
        ScrollTrigger.refresh();
      }, 200);
    });
  });

  /* ---------- checkmate ----------
     Knight and rook against a lone king: the hardest elementary mate there is,
     and the only position on the page where nothing gets taken. The two close
     the net, the king runs out of squares and leans, and it stays standing. */

  var mate = document.querySelector(".mate");

  if (mate) {
    var mKnight = mate.querySelector(".capture__knight");
    var mRook = mate.querySelector(".capture__ally");
    var mKing = mate.querySelector(".mate__king");

    var buildMate = function () {
      var W = mate.offsetWidth;

      gsap.set(mKnight, { x: -W * 0.3 });
      gsap.set(mRook, { x: W * 0.16 });
      gsap.set(mKing, { rotate: 0 });

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: mate,
          start: "top top",
          end: "bottom bottom",
          /* seconds the motion takes to catch the scrollbar. Low values
             track the wheel exactly, which is what made a fast scroll fling
             the pieces through the move; this lets a flick arrive as a
             settle instead. */
          scrub: 1.5,
        },
      });

      /* both arrive, the rook a beat behind so it reads as two moves */
      tl.to(mKnight, { x: 0, ease: "power2.out", duration: 0.62 }, 0)
        .to(mRook, { x: 0, ease: "power2.out", duration: 0.62 }, 0.1)
        /* the king shifts once each way and finds nothing */
        .to(mKing, { rotate: -3.5, ease: "power1.inOut", duration: 0.14 }, 0.6)
        .to(mKing, { rotate: 2.5, ease: "power1.inOut", duration: 0.16 }, 0.74)
        .to(mKing, { rotate: 0, ease: "power2.out", duration: 0.1 }, 0.9)
        .to({}, { duration: 0.01 }, 0.99);

      return tl;
    };

    var mtl = buildMate();

    var mt;
    window.addEventListener("resize", function () {
      clearTimeout(mt);
      mt = setTimeout(function () {
        if (mtl.scrollTrigger) mtl.scrollTrigger.kill();
        mtl.kill();
        gsap.set([mKnight, mRook, mKing], { clearProps: "all" });
        mtl = buildMate();
        ScrollTrigger.refresh();
      }, 200);
    });
  }
})();
