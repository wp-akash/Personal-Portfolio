$('.client').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
})

$('.works').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

function cursor() {
    var body = document.querySelector("body");
    var curspor = document.querySelector(".loder");
    body.addEventListener("mousemove", function (dets) {
        gsap.to(curspor, {
            x: dets.x,
            y: dets.y,
            duration: 1,
            ease: "back.out(1.7)",
        })
    })
}

gsap.set("a.btn", { opacity: 1 });

function hero() {
    var tl = gsap.timeline();
    tl.from(".text-wrapper h1", {
        y: 100,
        opacity: 0,
        delay:1.3,
        duration: 1.50,
    }, "1")
    tl.from(".text-wrapper p", {
        y: 120,
        opacity: 0,
        duration: 1.25,
        delay:1.10,
    })

    tl.from(".text-wrapper a.btn", {
        y: 10,
        opacity: 0,
        duration: 1.50,
        stagger: 1,
        delay:0.2,
    })
    tl.from(".hero .right_side", {
        y: -100,
        opacity: 0,
        duration: 1.2,
        delay:1,
    }, "1")
}


function about() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            scroller: 'body',
            // markers: true,
            start: 'top 50%',
            end: 'bottom 50%',
            scrub: 1.5,
        }
    });
    tl.from(".about .header_section h2", {
        y: 100,
        opacity: 0,
        duration: 1.5,
    })
    tl.from(".about .header_section p", {
        y: 110,
        opacity: 0,
        duration: 1.5,
    })
    tl.from(".about_left img", {
        y: 110,
        opacity: 0,
        duration: 1.5,
    }, "1")
    tl.from(".about_left h3", {
        y: 110,
        opacity: 0,
        duration: 1.5,
    })
    tl.from(".about_left p", {
        y: 110,
        opacity: 0,
        duration: 1.5,
    })
    tl.from(".single_box", {
        y: 110,
        opacity: 0,
        duration: 1.5,
        stagger: 1,
    })
    tl.from(".about_right .right_side", {
        x: 110,
        opacity: 0,
        duration: 1.5,
        stagger: 1,
    }, "1")
}
// Marque

function maequetag(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.black_section',
            scroller: 'body',
            // markers: true,
            start: 'top 50%',
            // end: 'bottom 50%',
            // scrub: 1.5,
        }
    });
    tl.from(".black_section", {
        x: 50,
        opacity: 0,
        scale: 1.5,
        duration: 1.5,
    })
    tl.from("marquee", {
        x: 50,
        opacity: 0,
        duration: 1.5,
    })
}

// Service
function service(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.myservice',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            // end: 'bottom 50%',
            // scrub: 1,
            
        }
    });
    tl.from(".myservice .header_section.service h2", {
        y: 50,
        opacity: 0,
        duration: 0.50,
    })
    tl.from(".myservice .header_section.service p", {
        y: 60,
        opacity: 0,
        duration: 1,
    })
    // tl.from(".myservice .box", {
    //     y: 40,
    //     opacity: 0,
    //     duration: 0.5,
    //     stagger: 0.2,
    // })
}
// Skill


function skill(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.myskill',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            // end: 'bottom 50%',
            // scrub: 1,
            
        }
    });
    tl.from(".myskill .header_section h2", {
        y: 50,
        opacity: 0,
        duration: 0.50,
    })
    tl.from(".myskill .header_section p", {
        y: 60,
        opacity: 0,
        duration: 1,
    })
    tl.from(".myskill .single_skill", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
    })
}



// Why i am diffrent
function different(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.different',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            // end: 'bottom 50%',
            // scrub: 1,
            
        }
    });
    tl.from(".different .header_section h2", {
        y: 50,
        opacity: 0,
        duration: 0.50,
    })
    tl.from(".different .header_section p", {
        y: 60,
        opacity: 0,
        duration: 1,
    })
    tl.from(".different .single_card.my-flex", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
    })
}


// My WOrk
function mywork(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.mywork',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            // end: 'bottom 50%',
            // scrub: 1,
            
        }
    });
    tl.from(".mywork .header_section h2", {
        y: 50,
        opacity: 0,
        duration: 0.50,
    })
    tl.from(".mywork .header_section p", {
        y: 60,
        opacity: 0,
        duration: 1,
    })
    tl.from(".mywork .item.project", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
    })
    tl.from(".mywork owl-nav", {
        y: 40,
        opacity: 0,
        duration: 0.5,
        stagger: 1,
    })
}

// Hire
function hire(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.hire',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            // end: 'bottom 50%',
            // scrub: 1,
            
        }
    });
    tl.from(".hire h3", {
        y: 60,
        opacity: 0,
        duration: 0.50,
    })
    tl.from(".hire h2", {
        y: 60,
        opacity: 0,
        duration: 0.50,
    })
    tl.from(".hire a", {
        y: 10,
        opacity: 0,
        duration: 1,
    })
}

// Testimonials
function testimonials(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.testimonials',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            // end: 'bottom 50%',
            // scrub: 1,
            
        }
    });
    tl.from(".testimonials .header_section h2", {
        y: 60,
        opacity: 0,
        duration: 0.50,
    })
    tl.from(".testimonials .header_section p", {
        y: 60,
        opacity: 0,
        duration: 0.50,
    })
    tl.from(".testimonials .item.client_info", {
        y: 10,
        opacity: 0,
        duration: 1,
    })
}

// Blog
function blog(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.blog',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            // end: 'bottom 50%',
            // scrub: 1,
            
        }
    });
    tl.from(".blog .header_section h2", {
        y: 60,
        opacity: 0,
        duration: 0.50,
    })
    tl.from(".blog .header_section p", {
        y: 60,
        opacity: 0,
        duration: 0.50,
    })
    tl.from(".blog .project.white-bg", {
        y: 10,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
    })
}

// Footer
function footer(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.footer-color',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            // end: 'bottom 50%',
            // scrub: 1,
            
        }
    });
    tl.from(".footer-color .logo", {
        y: 60,
        opacity: 0,
        duration: 0.50,
    })
    tl.from(".footer-color .social_media li", {
        y: 60,
        opacity: 0,
        duration: 0.5,
        stagger: 0.2,
    })
    tl.from(".footer-color h6", {
        y: 10,
        opacity: 0,
        duration: 1,
        
    })
}
// Footer
function Breadcrumb_section(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.Breadcrumb_section',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            // end: 'bottom 50%',
            // scrub: 1,
            
        }
    });
    tl.from(".Breadcrumb_section h3", {
        y: 60,
        opacity: 0,
        duration: 0.50,
        delay:1.4,
    })
    tl.from(".Breadcrumb_section ul li", {
        y: 60,
        opacity: 0,
        duration: 0.50,
        stagger: 0.2,
    })
}
// Loder
function splitText(element) {
    const text = element.textContent;
    element.textContent = '';
    
    return [...text].map(char => {
      const span = document.createElement('span');
      span.textContent = char;
      span.className = 'char';
      element.appendChild(span);
      return span;
    });
  }
  
  function overlayLoader() {
    const text = document.querySelector('#loading-text');
    const chars = splitText(text);
    
    const tl = gsap.timeline();

    tl.from(chars, {
      opacity: 0,
      scale: 2,
      duration: 0.5,
      stagger: 0.1,
      ease: "circ.out"
    })
    .to(chars, {
      opacity: 0.5,
      duration: 1,
      stagger: 0.02,
      ease: "circ.out"
    })
    .to('.loderbg', {
      yPercent: -100,
      duration: 1
    });
  }

overlayLoader();
Breadcrumb_section()
hero()
cursor()
about()
maequetag()
service()
skill()
different()
mywork()
hire()
testimonials()
blog()
footer()


