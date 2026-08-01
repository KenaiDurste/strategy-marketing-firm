(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- mobile nav ---------- */

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.setAttribute("data-open", String(!open));
    });

    nav.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        toggle.setAttribute("aria-expanded", "false");
        nav.setAttribute("data-open", "false");
        toggle.focus();
      }
    });
  }

  var gambit = document.querySelector(".gambit");

  if (reduced || !window.gsap || !window.ScrollTrigger) {
    document.documentElement.classList.remove("js-reveal");
    if (gambit) gambit.classList.add("gambit--static");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  /* ---------- reveals: headings rise, supporting copy fades ----------
     IntersectionObserver rather than ScrollTrigger: a scroll restore or a
     deep link jumps straight past a ScrollTrigger's start and never fires it,
     which would leave that content invisible for good. */

  var revealTargets = document.querySelectorAll(".r-rise, .r-fade");

  if (!("IntersectionObserver" in window)) {
    document.documentElement.classList.remove("js-reveal");
  } else {
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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
        },
      })
      .to(cue, { opacity: 0, y: 14, duration: 0.1 }, 0)
      .to(
        knight,
        {
          rotate: -16,
          rotateY: 190,
          rotateX: 10,
          scale: 1.06,
          y: "5vh",
          ease: "none",
          duration: 0.34,
        },
        0
      )
      .to(
        knight,
        {
          rotate: -72,
          rotateY: 415,
          rotateX: 0,
          scale: 0.58,
          y: "-108vh",
          opacity: 0,
          ease: "power2.in",
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
  }

  /* ---------- gambit: the knight takes five pieces, one per scroll beat ---------- */

  if (gambit) {
    var stage = gambit.querySelector(".gambit__stage");
    var gKnight = gambit.querySelector(".gambit__knight");
    var slots = gsap.utils.toArray(".gambit__slot", gambit);
    var pieces = slots.map(function (s) {
      return s.querySelector(".gambit__piece");
    });
    var beats = gsap.utils.toArray(".gambit__beat", gambit);

    var taken = gsap.utils.toArray(".gambit__taken li", gambit);
    var moves = slots.map(function (s) {
      return s.querySelector(".gambit__move");
    });

    var buildGambit = function () {
      var W = stage.offsetWidth;

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: gambit,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.9,
        },
      });

      slots.forEach(function (slot, i) {
        /* the knight enters from alternating wings, but the mark itself is
           never mirrored — its lit side is fixed, so the arc carries the
           direction instead of a flip */
        var dir = i % 2 === 0 ? 1 : -1;
        var startX = dir === 1 ? -0.2 * W : 1.2 * W;
        var endX = dir === 1 ? 1.2 * W : -0.2 * W;
        var targetX = slot.offsetLeft;
        var at = i;
        var last = i === slots.length - 1;

        tl.set(
          gKnight,
          {
            x: startX,
            xPercent: -50,
            y: -140,
            rotate: -dir * 22,
            scale: 0.82,
            opacity: 0,
          },
          at
        )
          /* the approach, arcing down onto the square */
          .to(
            gKnight,
            {
              x: targetX,
              y: 0,
              rotate: dir * 4,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
              duration: 0.32,
            },
            at
          )
          /* the piece goes over */
          .to(
            pieces[i],
            {
              rotate: dir * 84,
              x: dir * pieces[i].offsetWidth * 1.15,
              opacity: 0.16,
              ease: "power2.in",
              duration: 0.22,
            },
            at + 0.32
          )
          /* it lands in the captured tray, and the move gets its notation */
          .to(
            taken[i],
            { opacity: 0.85, ease: "power2.out", duration: 0.18 },
            at + 0.36
          )
          .fromTo(
            moves[i],
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.14 },
            at + 0.34
          )
          /* the line that belongs to this move */
          .fromTo(
            beats[i],
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, ease: "power2.out", duration: 0.16 },
            at + 0.04
          );

        if (last) {
          /* the closing beat holds to the end of the pin rather than
             leaving the visitor on an empty frame */
          tl.to(
            gKnight,
            { y: -14, ease: "power2.out", duration: 0.3 },
            at + 0.34
          );
        } else {
          tl.to(
            gKnight,
            {
              x: endX,
              y: -110,
              rotate: dir * 26,
              scale: 0.82,
              opacity: 0,
              ease: "power2.in",
              duration: 0.3,
            },
            at + 0.34
          ).to(
            beats[i],
            { opacity: 0, y: -22, ease: "power2.in", duration: 0.16 },
            at + 0.76
          );
        }
      });

      /* pad the final beat back to a full unit so every beat maps onto an
         equal slice of scroll, but resolve something inside the hold rather
         than freezing the frame: the knight settles and the tray lifts */
      var endAt = slots.length - 1;
      tl.to(
        gKnight,
        { y: -26, scale: 1.04, ease: "power1.inOut", duration: 0.62 },
        endAt + 0.38
      )
        .to(
          taken,
          { opacity: 1, y: -4, stagger: 0.05, ease: "power2.out", duration: 0.3 },
          endAt + 0.42
        )
        .to({}, { duration: 0.12 }, endAt + 0.88);

      return tl;
    };

    var gambitTl = buildGambit();

    /* the sweep distances are measured in pixels, so remeasure on resize */
    var resizeTimer;
    window.addEventListener("resize", function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        if (gambitTl.scrollTrigger) gambitTl.scrollTrigger.kill();
        gambitTl.kill();
        gsap.set([gKnight].concat(pieces, beats, taken, moves), {
          clearProps: "all",
        });
        gambitTl = buildGambit();
        ScrollTrigger.refresh();
      }, 200);
    });
  }
})();
