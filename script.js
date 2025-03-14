function sideMnu(){
        $('.sideMnu').toggleClass('close');
        $('.sideConts').toggleClass('active');
    }
    document.querySelector('.listArea').addEventListener('scroll', function () {
        const scrollPos = this.scrollLeft;
        const polaroids = document.querySelectorAll('.listArea .polar');

        polaroids.forEach((el, index) => {
            const wave = Math.sin((scrollPos + index * 50) * 0.02) * 15; 
            el.style.transform = `translateY(${wave}px)`;
        });
    });
    const POLARPIN = document.querySelector(".imgArea");
    const TRIGGER = document.querySelector(".txtArea");
    const ListEnd = document.querySelector(".listArea");
    ScrollTrigger.create({
        trigger: document.body, // 스크롤 시작 기준: 페이지 전체 (0부터)
        start: "top top", // 뷰포트 상단과 문서 상단이 일치할 때 시작
        endTrigger: ListEnd, // 종료 기준 요소를 .listArea로 지정
        pin: POLARPIN, // 고정
        pinSpacing: false 
    });
    gsap.to(POLARPIN, {
        scale: "0.9", // 원하는 축소 너비
        duration: 3,
        scrollTrigger: {
            trigger: document.body,
            start: "top top",  // 스크롤 시작 시 애니메이션 시작
            end: "bottom bottom", // 페이지 끝까지 지속
            scrub: 1,  // 스크롤과 함께 부드럽게 변함
        }
    });
    gsap.utils.toArray(".txtArea p").forEach((el, index) => {
        gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
                trigger: el,
                start: "top 95%", // 요소가 뷰포트의 90% 지점에 도달하면 시작
                toggleActions: "play reverse play reverse", // 한 번만 실행
            }
        });
    });
