import { Popup } from '../libs/popup.js';
// Подключение из node_modules
import * as noUiSlider from 'nouislider';

function bildSliders() {
  //BildSlider
  let sliders = document.querySelectorAll(
    '[class*="__swiper"]:not(.swiper-wrapper)'
  );
  if (sliders) {
    sliders.forEach((slider) => {
      slider.parentElement.classList.add('swiper');
      slider.classList.add('swiper-wrapper');
      for (const slide of slider.children) {
        slide.classList.add('swiper-slide');
      }
    });
  }
}

function initSliders() {
  bildSliders();
  // слайдер 'Выполненные работы'
  if (document.querySelector('.completed-work__slider')) {
    new Swiper('.completed-work__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 2,
      spaceBetween: 30,
      speed: 300,

      navigation: {
        nextEl: '.completed-work__nav .completed-work__next',
        prevEl: '.completed-work__nav .completed-work__prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        430: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        768: { slidesPerView: 1, spaceBetween: 30 },
        1023.98: {
          slidesPerView: 1,
        },
        1279.98: {
          slidesPerView: 2,
        },
      },
      on: {},
    });
  }
  // слайдер 'Бренды септиков'
  if (document.querySelector('.brand-carusel__slider')) {
    new Swiper('.brand-carusel__slider', {
      observer: true,
      watchSlidesProgress: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 300,
      autoHeight: false,
      navigation: {
        nextEl: '.brand-carusel__nav .brand-carusel__next',
        prevEl: '.brand-carusel__nav .brand-carusel__prev',
      },
      breakpoints: {
        319.98: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },

        767.98: {
          autoplay: false,
          slidesPerView: 2.6,
        },
        1023.98: {
          slidesPerView: 3,
          spaceBetween: 20,
          autoplay: false,
        },
        1279.98: {
          slidesPerView: 3,
          spaceBetween: 20,
          autoplay: false,
        },
      },
      on: {},
    });
  }
  // слайдер 'Популярные модели септиков'
  if (document.querySelector('.popular-models__slider')) {
    let pop = new Swiper('.popular-models__slider', {
      watchSlidesProgress: true,
      slidesPerView: 4,
      spaceBetween: 0,
      speed: 300,

      loop: false,
      navigation: {
        nextEl: '.popular-models__nav .popular-models__next',
        prevEl: '.popular-models__nav .popular-models__prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          centeredSlides: false,
        },
        374.98: {
          slidesPerView: 1.4,
          // initialSlide: 1,
          // centeredSlides: true,
        },

        768: {
          centeredSlides: false,
          slidesPerView: 2.5,
        },
        1024: { slidesPerView: 3 },
        1280: {
          slidesPerView: 4,
          initialSlide: 0,
        },
      },
      on: {},
    });
  }

  // слайдер телеграм
  if (document.querySelector('.submitted__slider-post')) {
    new Swiper('.submitted__slider-post', {
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoHeight: false,
      speed: 300,

      navigation: {
        nextEl: '.submitted__nav .submitted__next',
        prevEl: '.submitted__nav .submitted__prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 15,
        },
        430: { slidesPerView: 1.4, spaceBetween: 15 },
        768: {
          slidesPerView: '2.5',
        },
        1023.98: {
          spaceBetween: 30,
          slidesPerView: '3',
        },
      },

      on: {},
    });
  }
  // слайдер youtube
  if (document.querySelector('#slider-video')) {
    new Swiper('#slider-video', {
      observer: true,
      observeParents: true,
      slidesPerView: '2',
      spaceBetween: 30,
      autoHeight: false,
      speed: 300,

      // Arrows
      navigation: {
        nextEl: '.submitted__youtube-nav .submitted__youtube-next',
        prevEl: '.submitted__youtube-nav .submitted__youtube-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        430: {
          centeredSlides: false,
          slidesPerView: 1.6,
          spaceBetween: 15,
        },
        768: { centeredSlides: false, spaceBetween: 20 },
        1024: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },

      on: {},
    });
  }

  // слайдер журнал
  if (document.querySelector('#magazine-slide')) {
    new Swiper('#magazine-slide', {
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      speed: 300,
      navigation: {
        nextEl: '.submitted__magazine-nav .submitted__magazine-next',
        prevEl: '.submitted__magazine-nav .submitted__magazine-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        430: {
          centeredSlides: false,
          slidesPerView: 1.6,
          spaceBetween: 20,
        },
        768: { slidesPerView: 2.5, spaceBetween: 20 },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },

      on: {},
    });
  }
  // слайдер 'Варианты анализа воды'
  if (document.querySelector('.water-analysis__slider')) {
    new Swiper('.water-analysis__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoHeight: false,
      speed: 300,

      breakpoints: {
        319.98: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },

        767.98: {
          slidesPerView: 1.2,
          spaceBetween: 30,
        },
        1023.98: { slidesPerView: 2 },
      },

      on: {},
    });
  }
  // слайдер 'Что мы можем?'
  if (document.querySelector('#we-doing')) {
    new Swiper('#we-doing', {
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 25,
      autoHeight: false,
      speed: 300,
      loop: true,
      autoplay: {
        delay: 3000,
      },
      // Arrows
      navigation: {
        nextEl: '.we-doing__nav .we-doing__next',
        prevEl: '.we-doing__nav .we-doing__prev',
      },

      breakpoints: {
        319.98: {
          slidesPerView: 1.1,
          spaceBetween: 15,
          loop: true,
          autoplay: {
            delay: 3000,
          },
          centeredSlides: true,
        },
        429.98: { slidesPerView: 1.1 },

        767.98: {
          slidesPerView: 2.3,
          spaceBetween: 15,
        },
        1023.98: { slidesPerView: 3, spaceBetween: 20 },
        1439.98: {
          spaceBetween: 24,
        },
      },

      on: {},
    });
  }
  // слайдер 'Примеры работ'
  if (document.querySelector('#work-examples')) {
    new Swiper('#work-examples', {
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 25,
      autoHeight: false,
      speed: 300,
      loop: true,
      autoplay: {
        delay: 4000,
      },
      // Arrows
      navigation: {
        nextEl: '.work-examples__nav .work-examples__next',
        prevEl: '.work-examples__nav .work-examples__prev',
      },

      breakpoints: {
        319.98: {
          slidesPerView: 1.1,
          spaceBetween: 15,
          loop: true,
          autoplay: {
            delay: 3000,
          },
          centeredSlides: true,
        },
        429.98: { slidesPerView: 1.2 },
        529.98: { slidesPerView: 1.8 },

        767.98: {
          slidesPerView: 2.3,
          spaceBetween: 15,
        },
        1023.98: { slidesPerView: 3, spaceBetween: 20 },
        1439.98: {
          spaceBetween: 24,
        },
      },

      on: {},
    });
  }
  // слайдер 'Варианты ухода за газоном'
  if (document.querySelector('.lawn-options__slider')) {
    new Swiper('.lawn-options__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoHeight: false,
      speed: 300,
      pagination: {
        el: '.so-discount__pagging',
        clickable: true,
      },

      breakpoints: {
        319.98: {
          slidesPerView: 1.1,
          spaceBetween: 30,
        },
        429.98: { slidesPerView: 1.28 },

        767.98: {
          slidesPerView: 2.25,
          spaceBetween: 30,
        },
        1023.98: { slidesPerView: 3 },
      },

      on: {},
    });
  }
  // слайдер 'Как выгоднее с нами работать?'
  if (document.querySelector('.so-discount__slider')) {
    new Swiper('.so-discount__slider', {
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 30,
      autoHeight: false,
      speed: 300,
      pagination: {
        el: '.so-discount__pagging',
        clickable: true,
      },

      breakpoints: {
        319.98: {
          slidesPerView: 1.1,
          spaceBetween: 30,
        },
        429.98: { slidesPerView: 1.28 },

        767.98: {
          slidesPerView: 2.25,
          spaceBetween: 30,
        },
        1023.98: { slidesPerView: 3 },
      },

      on: {},
    });
  }
  // слайдер c sewera
  if (
    document.querySelector('.banner-gallery__slider:not(.swiper-initialized)')
  ) {
    new Swiper('.banner-gallery__slider:not(.swiper-initialized)', {
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: false,
      speed: 300,
      autoplay: {
        delay: 3000,
      },
      loop: true,
      navigation: {
        prevEl: '.banner-gallery__navigation .banner-gallery__btn_prev',
        nextEl: '.banner-gallery__navigation .banner-gallery__btn_next',
      },
      pagination: {
        el: '.banner-gallery__pagination',
        clickable: true,
      },

      breakpoints: {},

      on: {},
    });
  }
}
window.addEventListener('load', function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  initPopupSlider();
});
function initPopupSlider() {
  const pop = new Popup();

  const containerSlider = document.querySelector('.submitted__swiper-yt');

  if (!containerSlider) return;

  containerSlider.addEventListener('click', function (event) {
    if (!event.target.closest('.submitted__slide-yt_video')) return;

    let slideTargetVideo = event.target.closest('.submitted__slide-yt_video')
      .dataset.slide;

    bildSliders();

    if (document.querySelector('.popup-video__slider')) {
      const swiper = new Swiper('.popup-video__slider', {
        observer: true,
        observeParents: true,

        spaceBetween: 30,
        autoHeight: false,
        speed: 500,
        pagination: {
          el: '',
          clickable: true,
        },
        slideToClickedSlide: true,
        navigation: {
          nextEl: '#slider-popup-video_navigation #slider-popup-video_next',
          prevEl: '#slider-popup-video_navigation #slider-popup-video_prev',
        },
        breakpoints: {
          320: {
            spaceBetween: 15,
            centeredSlides: true,
            slidesPerView: '1.3',
          },
          430: {
            centeredSlides: true,
            spaceBetween: 15,
            slidesPerView: '1.2',
            initialSlide: 0,
          },
          768: {
            spaceBetween: 25,
            centeredSlides: false,
            slidesPerView: '1',
          },
          992: {
            slidesPerView: '1',
            spaceBetween: 30,
          },
        },

        on: {},
      });
      swiper.on('update', function () {
        swiper.slideTo(slideTargetVideo, 1, false);
      });
      swiper.on('slideChange', function () {
        pop.options.on.beforeClose();
      });
      swiper.update();
    }
  });

  function findVideos() {
    let videos = document.querySelectorAll('._video-yt');
    for (let i = 0; i < videos.length; i++) {
      setupVideo(videos[i]);
    }
  }
  findVideos();
  function setupVideo(video) {
    let link = video.querySelector('._video-yt-link');
    let media = video.querySelector('._video-yt-media');
    let button = video.querySelector('._video-yt-btn');
    let id = parseMediaURL(media);

    video.addEventListener('click', () => {
      let iframe = createIframe(id);

      link.style.display = 'none';
      button.style.display = 'none';
      video.appendChild(iframe);
    });

    link.removeAttribute('href');
    video.classList.add('video--enabled');
  }

  function parseMediaURL(media) {
    let regexp =
      /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
    let url = media.src;
    let match = url.match(regexp);

    return match[1];
  }

  function createIframe(id) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowfullscreen', '');
    // iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('id', 'youtube-slide');

    iframe.setAttribute('src', generateURL(id));
    iframe.classList.add('popup-video__media');
    return iframe;
  }
  function generateURL(id) {
    let query = '?enablejsapi=1&rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  }
}

// function initPopupSlider() {
//   const initPopups = new Popup();

//   const containerSlider = document.querySelector('.submitted__swiper-yt');

//   if (containerSlider) {
//     containerSlider.addEventListener('click', function (event) {
//       if (!event.target.closest('.submitted__slide-yt_video')) return;

//       let slideTargetVideo = event.target.closest('.submitted__slide-yt_video')
//         .dataset.slide;

//       bildSliders();

//       if (document.querySelector('.popup-video__slider')) {
//         const swiper = new Swiper(
//           '.popup-video__slider:not(.swiper-initialized)',
//           {
//             observer: true,
//             observeParents: true,

//             spaceBetween: 30,
//             autoHeight: false,
//             speed: 500,
//             pagination: {
//               el: '',
//               clickable: true,
//             },
//             slideToClickedSlide: true,
//             navigation: {
//               nextEl: '#slider-popup-video_navigation #slider-popup-video_next',
//               prevEl: '#slider-popup-video_navigation #slider-popup-video_prev',
//             },
//             breakpoints: {
//               320: {
//                 spaceBetween: 15,
//                 centeredSlides: true,
//                 slidesPerView: '1.3',
//               },
//               430: {
//                 centeredSlides: true,
//                 spaceBetween: 15,
//                 slidesPerView: '1.2',
//                 initialSlide: 0,
//               },
//               768: {
//                 spaceBetween: 25,
//                 centeredSlides: false,
//                 slidesPerView: '1',
//               },
//               992: {
//                 slidesPerView: '1',
//                 spaceBetween: 30,
//               },
//             },

//             on: {},
//           }
//         );
//         swiper.on('update', function () {
//           swiper.slideTo(slideTargetVideo, 1, false);
//         });
//         swiper.on('slideChange', function () {
//           initPopups.options.on.beforeClose();
//         });
//
//         swiper.update();
//       }
//     });
//   }

//   function findVideos() {
//     let videos = document.querySelectorAll('._video-yt');
//     for (let i = 0; i < videos.length; i++) {
//       setupVideo(videos[i]);
//     }
//   }
//   findVideos();
//   function setupVideo(video) {
//     let link = video.querySelector('._video-yt-link');
//     let button = video.querySelector('._video-yt-btn');
//     let id = parseIdFromUrl(link.href);

//     video.addEventListener('click', () => {
//       let iframe = createIframe(id);

//       link.style.display = 'none';
//       button.style.display = 'none';
//       video.appendChild(iframe);
//     });

//     link.removeAttribute('href');
//     video.classList.add('video--enabled');
//   }

//   function parseIdFromUrl(url) {
//     const regexp = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)\?*/i;
//     const match = url.match(regexp);

//     return match ? match[1] : false;
//   }

//   function createIframe(id) {
//     let iframe = document.createElement('iframe');

//     iframe.setAttribute('allowfullscreen', '');
//     iframe.setAttribute('allow', 'autoplay');
//     iframe.setAttribute('id', 'youtube-slide');

//     iframe.setAttribute('src', generateURL(id));
//     iframe.classList.add('popup-video__media');
//     return iframe;
//   }
//   function generateURL(id) {
//     let query = '?enablejsapi=1&rel=0&showinfo=0&autoplay=1';

//     return 'https://www.youtube.com/embed/' + id + query;
//   }
// }
/* инициализация карты */
function initMap() {
  const cityList = [
    {
      city: 'москва',
      center: [55.73, 37.6],
      zoom: 8,
      polygon: [
        [54.80831947994278, 38.18433433925412],
        [54.87945876925923, 38.52995859405644],
        [55.122011885673516, 38.67767483903884],
        [55.37773639221365, 38.95005546337981],
        [55.69101620830514, 39.06854923170738],
        [55.962220037403114, 39.09331426601756],
        [56.118493229997256, 38.83962697728742],
        [56.38328535103986, 38.538312268742686],
        [56.72694946754399, 38.84094055277811],
        [56.54218234666476, 37.45911829335503],
        [56.484269925944716, 36.55340126947627],
        [56.082994973012944, 35.26044765213379],
        [55.528582146509564, 35.79574540554199],
        [54.886906159423376, 36.2751232506904],
        [54.80831947994278, 38.18433433925412],
      ],
    },
    {
      city: 'питер',
      center: [59.93, 30.31],
      zoom: 7,
      polygon: [
        [61.106088074302846, 28.84990729821095],
        [60.54048161644306, 27.852634950925818],
        [60.75790210590904, 28.70283621526761],
        [60.71577485205364, 28.815934690349366],
        [60.36998777034415, 28.591678325406576],
        [60.16918067335956, 29.40829044088855],
        [60.211534546111665, 29.565211415079403],
        [60.187888023113686, 29.76919931592809],
        [60.15288724263536, 29.946358034169208],
        [60.12523238261545, 30.01739461918757],
        [60.0423242615806, 29.96706282242633],
        [59.98493140629839, 30.238787111520338],
        [59.93232002134522, 30.232711129552428],
        [59.84017052918489, 30.131823462708525],
        [59.885551817464716, 29.780468838045408],
        [59.93961408752628, 29.49723475289224],
        [59.964616467662836, 29.19559571694552],
        [59.91991225984697, 29.093497700881187],
        [59.83296746003299, 29.087954398797308],
        [59.78396907811887, 28.914027896498567],
        [59.75631501176312, 28.72500164979357],
        [59.800093425856545, 28.60943866524633],
        [59.80224973132346, 28.510190763084665],
        [59.73798583871411, 28.485433522283643],
        [59.66933873971914, 28.443601343301964],
        [59.6455402380044, 28.376395134689574],
        [59.65854803135656, 28.293968754917074],
        [59.69130561691546, 28.200415788977097],
        [59.74283516453832, 28.176907105205913],
        [59.767886802293845, 28.119769460495604],
        [59.671623961424615, 28.052389391540657],
        [59.53828823226743, 28.139961089731088],
        [59.35798953936603, 28.280648261698502],
        [59.02248117220134, 27.802166784452368],
        [59.00045046566632, 28.16716353323224],
        [58.90325564969078, 28.305782371843577],
        [58.892541977172385, 28.547145432234146],
        [58.839964234623864, 28.845593925558575],
        [58.81921766186278, 29.117229752723944],
        [58.71702324975635, 29.25362211337176],
        [58.61141214319082, 29.417761707109804],
        [58.52810610714258, 29.61583387713702],
        [58.45004102025334, 29.77698972302713],
        [58.47175326366724, 30.057070714286084],
        [58.528177693429086, 30.078493270758997],
        [58.670382603306024, 30.045047415771506],
        [58.784750929872246, 30.172568775367296],
        [58.77110172497413, 30.343612119793363],
        [58.74393741340788, 30.50480117892272],
        [58.76087846060315, 30.64903410782111],
        [58.89266306882436, 30.720318055999343],
        [58.931775319679105, 30.87541133018749],
        [59.08920426528445, 31.001107474298152],
        [59.05199909544481, 31.247310598952225],
        [59.16120182948734, 31.46040108683397],
        [59.24601344328124, 31.51924861119312],
        [59.3841107762172, 31.519650608045566],
        [59.37453535197764, 31.743859355535903],
        [59.41319939652709, 31.895892426683588],
        [59.4229337327242, 32.06818148171814],
        [59.35859553485514, 32.20693837199164],
        [59.28307118884456, 32.32414465705074],
        [59.17916450331086, 32.39505501883892],
        [59.15220746691128, 32.516090367786234],
        [59.16411241403188, 32.67707713805814],
        [59.25209559211132, 32.704493920109],
        [59.34898953782607, 32.772563410771056],
        [59.396925101876036, 32.86750784159898],
        [59.44235324548666, 33.07951705642466],
        [59.413053844884786, 33.23037247596619],
        [59.42351502348515, 33.46150882912565],
        [59.3621493877059, 33.71617224039184],
        [59.28076198027452, 33.85555732820072],
        [59.18093545333778, 34.07927365350611],
        [59.218446738264504, 34.31479262566086],
        [59.18449031867098, 34.46167119790215],
        [59.15756557610953, 34.569028458632886],
        [59.134213013591875, 34.74295902207777],
        [59.19477306563164, 34.801078803116695],
        [59.2564359565597, 34.97977799727809],
        [59.2912162694453, 35.12579135405289],
        [59.32989570283232, 35.26304437874467],
        [59.394126305198824, 35.282047170349756],
        [59.44494765499957, 35.336190323574385],
        [59.527887428452004, 35.279241905261756],
        [59.55491865313289, 35.38593012930545],
        [59.56172289354441, 35.45519752319393],
        [59.63727521994343, 35.448287025471046],
        [59.65468260646398, 35.555353868864756],
        [59.686264326387004, 35.562483180192146],
        [59.703950761999664, 35.42163323598487],
        [59.76838546078838, 35.34683149778368],
        [59.85256037133368, 35.3567480923831],
        [59.92369691755857, 35.406137191942264],
        [59.9805250889039, 35.28730686193509],
        [60.017895388841026, 35.10473292452272],
        [60.08351447005737, 35.16532530607367],
        [60.18264270143564, 35.12041199589066],
        [60.25167418889458, 35.135359361852636],
        [60.33731700421731, 35.225018017333184],
        [60.599637668599655, 35.24198481129656],
        [60.66614517771396, 35.19836887519892],
        [60.73404500750823, 35.14189036348486],
        [60.860688754947546, 35.23361484311272],
        [60.88857627351911, 35.38923417605841],
        [60.93444654114589, 35.52607157330945],
        [61.02021458655281, 35.63697856871454],
        [61.1083074214377, 35.66627786728151],
        [61.15697755043698, 35.65753483388153],
        [61.138111449137995, 35.513698102849844],
        [61.12318207774868, 35.36526337298682],
        [61.1832439172974, 35.335165607609014],
        [61.23909327326484, 35.34306604636703],
        [61.228582198408304, 35.19403076257794],
        [61.22860626645772, 35.028774374516416],
        [61.26035502030351, 34.80014854115669],
        [61.228371912248804, 34.62740677860907],
        [61.16914050333483],
        34.521057796999315,
        [61.1381625782991, 34.375724845099],
        [61.193136211572295, 34.274744102545526],
        [61.207127022717884, 34.01546202975132],
        [61.203757474773255, 33.698387119373336],
        [61.16566629145257, 33.56353423301232],
        [61.15193178960703, 33.495864964454626],
        [61.10094639830956, 33.57979779688657],
        [61.14509680547397, 33.76467751366431],
        [61.12465903378748, 33.91802782223414],
        [61.008016691462956, 33.941252627795365],
        [60.9144170484949, 33.816468775562356],
        [60.92079313266953, 33.67582168857538],
        [60.95277608109717, 33.57544502404991],
        [60.99486230036612, 33.50047914244152],
        [60.9656518934932, 33.47746318511602],
        [60.920762010627215, 33.49682021768072],
        [60.88595190808354, 33.39188123480494],
        [60.8360574570367, 33.341192219070024],
        [60.753586881331614, 33.26077873445362],
        [60.696863877704004, 33.128608162644554],
        [60.66744942292257, 33.013157521200924],
        [60.47643160894205, 32.82599005653793],
        [60.50472927233986, 32.65483755366424],
        [60.396308853622884, 32.74780061241211],
        [60.31819019883031, 32.66598898975374],
        [60.245199187531796, 32.65909996699057],
        [60.161066458141306, 32.61444214580604],
        [60.12614806592467, 32.495855101856904],
        [60.09471699316654, 32.301778825749864],
        [60.11039252448461, 32.18459263609901],
        [60.16749132430087, 32.070916239492675],
        [60.18998264893045, 31.889161919783447],
        [60.18675966797986, 31.73410743459536],
        [60.119836209160354, 31.65017367415598],
        [60.0605217394008, 31.6046419601648],
        [59.99324259600215, 31.610785530865854],
        [59.93335651991168, 31.59401443688691],
        [59.880472446391366, 31.50763516198711],
        [59.886351135496454, 31.27940617403553],
        [59.90097354234132, 31.142684758149613],
        [59.91566408008279, 30.99993686742772],
        [59.95660389144942, 30.951398418986003],
        [60.00105689222647, 31.02619414415352],
        [60.07363677987078, 31.053152954550058],
        [60.151108957508114, 30.981435482398467],
        [60.22734836046297, 30.91402784967906],
        [60.375430876166945, 30.82185987239356],
        [60.49908511402646, 30.692137455248258],
        [60.58062586990846, 30.57597504845583],
        [60.64945709096361, 30.443091178705856],
        [60.73859746306803, 30.47682683528842],
        [60.806970681028275, 30.462987825587703],
        [61.00722789319536, 30.257720710362037],
        [61.0946869940374, 30.081598200023848],
        [61.151348903426424, 29.830549834254754],
        [61.15529478015222, 29.613444318104058],
        [61.212959857671194, 29.516226783570488],
        [61.263060270690886, 29.348334364957054],
        [61.25454458553398, 29.24086735976627],
        [61.106088074302846, 28.84990729821095],
      ],
    },
  ];

  const tabsMap = document.querySelectorAll('button[data-city-map]');
  const slectorBtn = document.querySelectorAll('.ya-map__tab');

  var myMap = new ymaps.Map(
    'map',
    {
      center: cityList[0].center,
      zoom: 8,
    },
    {
      searchControlProvider: 'yandex#search',
    }
  );
  if (slectorBtn) {
    slectorBtn.forEach((element) => {
      element.addEventListener('click', (e) => {
        if (element.closest('._active-tab-map')) {
          return;
        }
        slectorBtn.forEach((el) => el.classList.remove('_active-tab-map'));
        element.classList.add('_active-tab-map');
      });
    });
  }
  if (tabsMap.length !== 0) {
    tabsMap.forEach((element) => {
      const dataCity = element.dataset.cityMap;
      let objCity = cityList.find((el) => dataCity === el.city);

      let myPolygon = new ymaps.Polygon(
        [objCity.polygon],
        {
          hintContent: 'Многоугольник',
        },
        {
          fillColor: '#009CD9',
          strokeWidth: 1,
          strokeColor: '#0067A0',
          strokeOpacity: 1,
          fillOpacity: 0.2,
        }
      );
      myMap.geoObjects.add(myPolygon);
      myMap.geoObjects.add(new ymaps.Placemark(objCity.center, {}));

      element.addEventListener('click', (e) => {
        myMap.setCenter(objCity.center, objCity.zoom);
      });
    });
  } else {
    myMap.geoObjects.add(new ymaps.Placemark([55.73, 37.6], {}));
    let myPolygon = new ymaps.Polygon(
      [
        [
          [54.80831947994278, 38.18433433925412],
          [54.87945876925923, 38.52995859405644],
          [55.122011885673516, 38.67767483903884],
          [55.37773639221365, 38.95005546337981],
          [55.69101620830514, 39.06854923170738],
          [55.962220037403114, 39.09331426601756],
          [56.118493229997256, 38.83962697728742],
          [56.38328535103986, 38.538312268742686],
          [56.72694946754399, 38.84094055277811],
          [56.54218234666476, 37.45911829335503],
          [56.484269925944716, 36.55340126947627],
          [56.082994973012944, 35.26044765213379],
          [55.528582146509564, 35.79574540554199],
          [54.886906159423376, 36.2751232506904],
          [54.80831947994278, 38.18433433925412],
        ],
      ],
      {
        hintContent: 'Многоугольник',
      },
      {
        fillColor: '#009CD9',
        strokeWidth: 1,
        strokeColor: '#0067A0',
        strokeOpacity: 1,
        fillOpacity: 0.2,
      }
    );

    myMap.geoObjects.add(myPolygon);
  }

  // myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}
ymaps.ready(initMap);
/* кнопка инфо  Модификации */

// ===================================================================
function tabModificationModel() {
  const infoModelBtn = document.querySelectorAll('.card-model__info-btn');
  if (infoModelBtn) {
    infoModelBtn.forEach((element, indx) => {
      // полуялоны емодели
      element.addEventListener('click', function (e) {
        element.classList.toggle('_show');
      });
      document.addEventListener('click', (e) => {
        let target = e.target;

        if (element.contains(target)) return;
        if (!element.firstChild.contains(target)) {
          element.classList.remove('_show');
        }
      });
    });
  }
  const dataModel = [
    // 1
    {
      oneTopBtn: [
        {
          linkModel: 'septik-akvalos-4',
          id: '1',
          img: '1',
          name: 'Септик Аквалос 4',
          onePointList: '60',
          threePointList: '250',
          price: '106 200 ₽',
          discount: '118 000 ₽',
        },
      ],
      twoTopBtn: [
        {
          linkModel: 'septik-akvalos-4-pr',

          id: '1',
          img: '1',
          name: 'Септик Аквалос 4 ПР',
          onePointList: '60',
          threePointList: '230',
          price: '106 200 ₽',
          discount: '118 000 ₽',
        },
      ],
    },
    // 2
    {
      oneTopBtn: [
        {
          linkModel: 'septik-tver-0-35p',

          id: '1',
          img: '2-s',
          name: 'Септик Тверь 0,35 П',
          onePointList: '30',
          threePointList: '120',
          price: '108 900 ₽',
          discount: '',
        },
      ],
      twoTopBtn: [
        {
          linkModel: 'septik-tver-0-35-pn',
          id: '1',
          img: '2-p',
          name: 'Септик Тверь 0,35 ПН',
          onePointList: '30',
          threePointList: '110',
          price: '118 800 ₽',
          discount: '',
        },
      ],
    },
    // 3
    {
      oneTopBtn: [
        {
          linkModel: 'septik-tver-0-5-p',
          id: '1',
          img: '3-s',
          name: 'Септик Тверь 0,5 П',
          onePointList: '30',
          threePointList: '120',
          price: '118 800 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-0-5-pm',
          id: '2',
          img: '3-s-pm',
          name: 'Септик Тверь 0,5 ПМ',
          onePointList: '60',
          threePointList: '110',
          price: '136 900 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-0-5-np',
          id: '3',
          img: '3-s',
          name: 'Септик Тверь 0,5 НП',
          onePointList: '60',
          threePointList: '120',
          price: '131 800 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-0-5-npm',
          id: '4',
          img: '3-s-pm',
          name: 'Септик Тверь 0,5 НПМ',
          onePointList: '60',
          threePointList: '120',
          price: '151 600 ₽',
          discount: '',
        },
      ],
      twoTopBtn: [
        {
          linkModel: 'septik-tver-0-5-pn',
          id: '1',
          img: '3-p',
          name: 'Септик Тверь 0,5 ПН',
          onePointList: '30',
          threePointList: '120',
          price: '118 800 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-0-5-pnm',
          id: '2',
          img: '3-p-pm',
          name: 'Септик Тверь 0,5 ПНМ',
          onePointList: '60',
          threePointList: '120',
          price: '151 600 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-0-5-npn',
          id: '3',
          img: '3-p',
          name: 'Септик Тверь 0,5 НПН',
          onePointList: '30',
          threePointList: '120',
          price: '142 700 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-0-5-npnm',
          id: '4',
          img: '3-p-mpn',
          name: 'Септик Тверь 0,8 НПНМ',
          onePointList: '60',
          threePointList: '120',
          price: '164 900 ₽',
          discount: '',
        },
      ],
    },
    // 4
    {
      oneTopBtn: [
        {
          linkModel: 'septik-astra-5',
          id: '1',
          img: '4',
          name: 'Септик Юнилос Астра 5',
          onePointList: '85',
          threePointList: '250',
          price: '123 250 ₽',
          discount: '145 000 ₽',
        },
        {
          linkModel: 'septik-astra-5-midi',
          id: '2',
          img: '4-m',
          name: 'Септик Юнилос Астра 5 Миди',
          onePointList: '100',
          threePointList: '250',
          price: '125 800 ₽',
          discount: '148 000 ₽',
        },
        {
          linkModel: 'septik-astra-5-long',
          id: '3',
          img: '4-l',
          name: 'Септик Юнилос Астра 5 Лонг',
          onePointList: '150',
          threePointList: '250',
          price: '141 950 ₽',
          discount: '167 000 ₽',
        },
      ],
      twoTopBtn: [
        {
          linkModel: 'septik-astra-5-pr',
          id: '1',
          img: '4',
          name: 'Септик Юнилос Астра 5 Пр',
          onePointList: '85',
          threePointList: '250',
          price: '127 500 ₽',
          discount: '150 000 ₽',
        },
        {
          linkModel: 'septik-astra-5-midi-pr',
          id: '2',
          img: '4-m',
          name: 'Септик Юнилос Астра 5 Миди Пр',
          onePointList: '100',
          threePointList: '250',
          price: '130 050 ₽',
          discount: '153 000 ₽',
        },
        {
          linkModel: 'septik-astra-5-long-pr',
          id: '3',
          img: '4-l',
          name: 'Септик Юнилос Астра 5 Лонг Пр',
          onePointList: '150',
          threePointList: '250',
          price: '146 200 ₽',
          discount: '172 000',
        },
      ],
    },
    // 5
    {
      oneTopBtn: [
        {
          linkModel: 'septik-topol-6',
          id: '1',
          img: '5',
          name: 'Септик Тополь 6',
          onePointList: '85',
          threePointList: '270',
          price: '129 420 ₽',
          discount: '143 800 ₽',
        },
        {
          linkModel: 'septik-topol-6-pljus',
          id: '2',
          img: '5-p',
          name: 'Септик Тополь 6 Плюс',
          onePointList: ' 135',
          threePointList: '270',
          price: '145 440 ₽',
          discount: '161 600 ₽',
        },
      ],
      twoTopBtn: [
        {
          linkModel: 'septik-topol-6-pr',
          id: '1',
          img: '5-p',
          name: 'Септик Тополь 6 Пр',
          onePointList: '85',
          threePointList: '270',
          price: '139 500 ₽',
          discount: '155 000 ₽',
        },
        {
          linkModel: 'septik-topol-6-pr-pljus',
          id: '2',
          img: '5-p',
          name: 'Септик Тополь 6 Пр Плюс',
          onePointList: '135',
          threePointList: '270',
          price: '157 320 ₽',
          discount: '174 800 ₽',
        },
      ],
    },
    // 6
    {
      oneTopBtn: [
        {
          linkModel: 'septik-tver-085-p',
          id: '1',
          img: '6-s',
          name: 'Септик Тверь 0,8 П',
          onePointList: '30',
          threePointList: '120',
          price: '135 900 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-085-pm',
          id: '2',
          img: '6-s-pm',
          name: 'Септик Тверь 0,8 ПМ',
          onePointList: '60',
          threePointList: '225',
          price: '159 600 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-085-np',
          id: '3',
          img: '6-s',
          name: 'Септик Тверь 0,8 НП',
          onePointList: '102',
          threePointList: '225',
          price: '150 900 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-085-npm',
          id: '4',
          img: '6-s-pm',
          name: 'Септик Тверь 0,8 НПМ',
          onePointList: '132',
          threePointList: '225',
          price: '178 400 ₽',
          discount: '',
        },
      ],
      twoTopBtn: [
        {
          linkModel: 'septik-tver-085-pn',
          id: '1',
          img: '6-p',
          name: 'Септик Тверь 0,8 ПН',
          onePointList: '30',
          threePointList: '630',
          price: '150 700 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-085-pnm',
          id: '2',
          img: '6-p-pm',
          name: 'Септик Тверь 0,8 ПНМ',
          onePointList: '60',
          threePointList: '225',
          price: '178 400 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-085-npn',
          id: '3',
          img: '6-p',
          name: 'Септик Тверь 0,8 НПН',
          onePointList: '102',
          threePointList: '225',
          price: '163 900 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-085-npnm',
          id: '4',
          img: '6-p-pm',
          name: 'Септик Тверь 0,8 НП',
          onePointList: '132',
          threePointList: '225',
          price: '192 600 ₽',
          discount: '',
        },
      ],
    },
    // 7
    {
      oneTopBtn: [
        {
          linkModel: 'septik-akvalos-8',
          id: '1',
          img: '7',
          name: 'Септик Аквалос 8',
          onePointList: '60',
          threePointList: '700',
          price: '130 050 ₽',
          discount: '165 000 ₽',
        },
        {
          linkModel: 'septik-akvalos-8-mid',
          id: '2',
          img: '7-m',
          name: 'Септик Аквалос 8 Миди',
          onePointList: '85',
          threePointList: '700',
          price: '153 900 ₽',
          discount: '171 000 ₽',
        },
        {
          linkModel: 'septik-akvalos-8-long',
          id: '3',
          img: '7-l',
          name: 'Септик Аквалос 8 Лонг',
          onePointList: '120',
          threePointList: '700',
          price: '167 400 ₽',
          discount: '186 000 ₽',
        },
      ],
      twoTopBtn: [
        {
          linkModel: 'septik-akvalos-8-pr',
          id: '1',
          img: '7',
          name: 'Септик Аквалос 8 Пр',
          onePointList: '60',
          threePointList: '630',
          price: '148 500 ₽',
          discount: '165 000 ₽',
        },
        {
          linkModel: 'septik-akvalos-8-midi-pr',
          id: '2',
          img: '7-m',
          name: 'Септик Аквалос 8 Миди Пр',
          onePointList: '85',
          threePointList: '630',
          price: '153 900 ₽',
          discount: '171 000 ₽',
        },
        {
          linkModel: 'septik-akvalos-8-long-pr',
          id: '3',
          img: '7-l',
          name: 'Септик Аквалос 8 Лонг Пр',
          onePointList: '120',
          threePointList: '700',
          price: '167 400 ₽',
          discount: '186 000',
        },
      ],
    },
    // 8
    {
      oneTopBtn: [
        {
          linkModel: 'septik-astra-8',
          id: '1',
          img: '4',
          name: 'Септик Юнилос Астра 8',
          onePointList: '85',
          threePointList: '350',
          price: '149 600 ₽',
          discount: '176 000 ₽',
        },
        {
          linkModel: 'septik-astra-8-midi',
          id: '2',
          img: '4-m',
          name: 'Септик Юнилос Астра 8 Миди',
          onePointList: '100',
          threePointList: '350',
          price: '152 150 ₽',
          discount: '179 000 ₽',
        },
        {
          linkModel: 'septik-astra-8-long',
          id: '3',
          img: '4-l',
          name: 'Септик Юнилос Астра 8 Лонг',
          onePointList: '150',
          threePointList: '350',
          price: '173 400 ₽',
          discount: '204 000 ₽',
        },
      ],
      twoTopBtn: [
        {
          linkModel: 'septik-astra-8-pr',
          id: '1',
          img: '4',
          name: 'Септик Юнилос Астра 8 Пр',
          onePointList: '85',
          threePointList: '350',
          price: '153 850 ₽',
          discount: '181 850 ₽',
        },
        {
          linkModel: 'septik-astra-8-midi-pr',
          id: '2',
          img: '4-m',
          name: 'Септик Юнилос Астра 8 Миди Пр',
          onePointList: '100',
          threePointList: '350',
          price: '156 400 ₽',
          discount: '184 000 ₽',
        },
        {
          linkModel: 'septik-astra-8-long-pr',
          id: '3',
          img: '4-l',
          name: 'Септик Юнилос Астра 8 Лонг Пр',
          onePointList: '150',
          threePointList: '350',
          price: '167 400 ₽',
          discount: '177 650 ₽',
        },
      ],
    },
    // 9
    {
      oneTopBtn: [
        {
          linkModel: 'septik-tver-1-p',
          id: '1',
          img: '9-s',
          name: 'Септик Тверь 1,1 П',
          onePointList: '30',
          threePointList: '330',
          price: '152 475 ₽',
          discount: '160 500 ₽',
        },
        {
          linkModel: 'septik-tver-1-pm',
          id: '2',
          img: '9-s-pm',
          name: 'Септик Тверь 1,1 ПМ',
          onePointList: ' 60',
          threePointList: '330',
          price: '184 300 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-1-np',
          id: '3',
          img: '9-s',
          name: 'Септик Тверь 1,1 НП',
          onePointList: '102',
          threePointList: '330',
          price: '174 900 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-1-npm',
          id: '4',
          img: '9-s-pm',
          name: 'Септик Тверь 1,1 НПМ',
          onePointList: '132',
          threePointList: '225',
          price: '199 800 ₽',
          discount: '',
        },
      ],
      twoTopBtn: [
        {
          linkModel: 'septik-tver-1-pn',
          id: '1',
          img: '9-p',
          name: 'Септик Тверь 1,1 ПН',
          onePointList: '30',
          threePointList: '330',
          price: '174 900 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-1-pnm',
          id: '2',
          img: '9-p-pm',
          name: 'Септик Тверь 1,1 ПНМ',
          onePointList: '60',
          threePointList: '330',
          price: '199 800 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-1-pnm',
          id: '3',
          img: '9-p',
          name: 'Септик Тверь 1,1 НПН',
          onePointList: '102',
          threePointList: '330',
          price: '189 400 ₽',
          discount: '',
        },
        {
          linkModel: 'septik-tver-1-npnm',
          id: '4',
          img: '9-p-pm',
          name: 'Септик Тверь 1,1 НП',
          onePointList: '132',
          threePointList: '330',
          price: '251 900 ₽',
          discount: '',
        },
      ],
    },
  ];
  const slidesModel = document.querySelector('.popular-models__swiper');
  if (slidesModel) {
    slidesModel.addEventListener('click', function (e) {
      let target = e.target;
      selectTab(target, '.card-model__top-btn');
      selectTab(target, '.card-model__bottom-btn');

      let activeBottomBtn = '1';
      let activeTopBtn = '1';
      const slideModel = document.querySelectorAll('.popular-models__slide');
      let findIndxSlide;
      let indxSlide;

      if (target.closest('[data-top-id]')) {
        for (let z = 0; z < slideModel.length; z++) {
          const element = slideModel[z];
          if (
            element.dataset.slideId ===
            target.closest('[data-top-id]').dataset.topId
          ) {
            findIndxSlide = slideModel[+element.dataset.slideId];
            indxSlide = element.dataset.slideId;
            activeTopBtn = searchActiveBtn(
              findIndxSlide.querySelector('.card-model__top-btns')
            );
            if (findIndxSlide.querySelector('.card-model__bottom-btns')) {
              activeBottomBtn = searchActiveBtn(
                findIndxSlide.querySelector('.card-model__bottom-btns')
              );
            }
          }
        }
      }

      if (target.closest('[data-bottom-id]')) {
        for (let i = 0; i < slideModel.length; i++) {
          const element = slideModel[i];
          if (
            element.dataset.slideId ===
            target.closest('[data-bottom-id]').dataset.bottomId
          ) {
            findIndxSlide = slideModel[+element.dataset.slideId];
            indxSlide = element.dataset.slideId;
            activeTopBtn = searchActiveBtn(
              findIndxSlide.querySelector('.card-model__top-btns')
            );
            activeBottomBtn = searchActiveBtn(target.parentElement);
            break;
          }
        }
      }
      if (!findIndxSlide) return;
      const topBtn = findIndxSlide.querySelector('.card-model__top-btns');
      const nameModel = findIndxSlide.querySelector('.card-model__name');
      const priceModel = findIndxSlide.querySelector(
        '.card-model__current-price'
      );
      const discountModel = findIndxSlide.querySelector(
        '.card-model__discount-price'
      );
      const imgModel = findIndxSlide.querySelector('.card-model__img img');
      const listModel = findIndxSlide.querySelector('.card-model__list');
      const likeBtn = findIndxSlide.querySelector('.card-model__favorite');

      if (target.closest('.card-model__favorite')) {
        likeBtn.classList.toggle('_active');
      }
      activeTopBtn = searchActiveBtn(topBtn);

      let findObjModel = dataModel[indxSlide][activeTopBtn].find(
        (it) => it.id == activeBottomBtn
      );

      if (findObjModel.name && nameModel) {
        nameModel.innerHTML = '';
        nameModel.innerHTML = findObjModel.name;
        nameModel.setAttribute(
          'href',
          `https://sewera.ru/products/${findObjModel.linkModel}`
        );
      }

      if (findObjModel.price && priceModel) {
        priceModel.innerHTML = '';
        priceModel.innerHTML = findObjModel.price;
      }

      if (findObjModel.discount && discountModel) {
        discountModel.innerHTML = '';
        discountModel.innerHTML = findObjModel.discount;
      } else {
        if (discountModel) discountModel.innerHTML = '';
      }

      if (findObjModel.onePointList && listModel) {
        listModel.children[0].firstElementChild.innerHTML = '';
        listModel.children[0].firstElementChild.innerHTML =
          findObjModel.onePointList;
      }

      if (findObjModel.threePointList && listModel) {
        listModel.children[2].firstElementChild.innerHTML = '';
        listModel.children[2].firstElementChild.innerHTML =
          findObjModel.threePointList;
      }

      if (findObjModel.img && imgModel) {
        createImgSrc(imgModel, findObjModel.img);
      }

      listModel.children[3].firstElementChild.innerHTML = '';
      listModel.children[3].firstElementChild.innerHTML =
        activeTopBtn === 'oneTopBtn' ? 'Самотеком' : 'Принудительный';
    });
  }
  /* добавдляем класс _active-btn */
  function selectTab(target, selectorBtn) {
    if (target.closest(selectorBtn) && !target.closest('._active-btn')) {
      Array.from(target.parentElement.children).forEach((el, i) => {
        el.classList.remove('_active-btn');
      });
      target.classList.add('_active-btn');
    }
  }
  // созадние пути для картнки
  function createImgSrc(img, btn) {
    if (btn) {
      const endIndxSrc = img.src.lastIndexOf('/');
      img.src = img.src.slice(0, endIndxSrc + 1) + btn + '.webp';
    }
  }

  /* поиск активного  класса в topBtn */
  function searchActiveBtn(selectorBtn) {
    let activeTopBtn;

    Array.from(selectorBtn.children).forEach((el) => {
      if (el.closest('._active-btn')) {
        let keys = Object.keys(el.dataset);
        activeTopBtn = el.dataset[keys[0]];
      }
    });

    return activeTopBtn;
  }
}
tabModificationModel();
function rangeInit() {
  const arbitraryValuesForSlider = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '10+',
  ];

  var format = {
    to: function (value) {
      return arbitraryValuesForSlider[Math.round(value)];
    },
    from: function (value) {
      return arbitraryValuesForSlider.indexOf(value);
    },
  };
  const priceSlider = document.querySelector('#range');
  if (priceSlider) {
    let textFrom = priceSlider.getAttribute('data-from');
    let textTo = priceSlider.getAttribute('data-to');

    noUiSlider.create(priceSlider, {
      start: 3,
      step: 1,
      range: {
        min: [0],
        max: [arbitraryValuesForSlider.length - 1],
      },
      tooltips: true,
      format: format,
      connect: [true, false],
      pips: {
        mode: 'count',
        stepped: true,
        values: 11,

        format: format,
      },
    });
  }
}
rangeInit();

function initQwiz() {
  const qwizFrom = document.querySelector('#services_quiz_form');
  const qwizCalc = document.querySelector('#calc-septik');
  if (qwizFrom) {
    const checkBlock = document.querySelector('.form-qwiz');
    const inputChecks = document.querySelectorAll('.form-qwiz__input');
    const steps = document.querySelectorAll('.form-qwiz__step');
    const prevBtn = document.querySelector('.qwiz-section__prev-btn');
    const nextBtn = document.querySelector('.qwiz-section__next-btn');
    const panelNavigate = document.querySelector('.qwiz-section__bottom');
    const stepCurrentNumber = document.querySelector(
      '.qwiz-section__current-step'
    );
    const restartBtn = document.querySelector('.form-qwiz__restart-btn');
    const finishStep = document.querySelector('.qwiz-section__finish-step');
    let currentStep = 0;
    let isCheck = false;

    nextBtn.addEventListener('click', nextStep);
    prevBtn.addEventListener('click', prevStep);
    checkBlock.addEventListener('click', isClickCheck);
    if (finishStep) finishStep.innerHTML = `/${steps.length - 1}`;
    // кнопка заказать занова
    if (restartBtn)
      restartBtn.addEventListener('click', function (e) {
        currentStep = 0;
        isCheck = false;
        stepCurrentNumber.innerHTML = 1;
        prevBtn.classList.add('_disabled');
        prevBtn.disabled = true;
        steps[0].classList.add('_current');
        steps[steps.length - 1].classList.remove('_current');
        panelNavigate.style.display = 'flex';
        stepCurrentNumber.parentNode.style.display = 'flex';
        stepCurrentNumber.parentNode.classList.remove('_ready');
        inputChecks.forEach((inpt) => (inpt.checked = false));
      });

    function isClickCheck(e) {
      let target = e.target;
      if (target.classList.contains('form-qwiz__input')) {
        isValidateFormService();

        if (!isCheck && currentStep === steps.length - 3) {
          nextBtn.classList.add('_disabled');
          nextBtn.disabled = true;
        }
        if (isCheck) {
          nextBtn.classList.remove('_disabled');
          nextBtn.disabled = false;
        }
      }
    }
    // ==============================================================================

    // шаг вперед
    function nextStep(e) {
      ++currentStep;

      isValidateFormService();

      console.log(currentStep);
      if (isCheck && currentStep === steps.length - 2) {
        stepCurrentNumber.parentNode.classList.add('_ready');
      }

      if (!isCheck && currentStep === steps.length - 3) {
        nextBtn.classList.add('_disabled');
        nextBtn.disabled = true;
      }
      if (steps.length - 1 === currentStep) {
        stepCurrentNumber.parentNode.style.display = 'none';
      }

      if (steps.length - 2 === currentStep) {
        panelNavigate.style.display = 'none';
      }

      if (steps.length === currentStep) {
        steps[currentStep - 1].style.display = 'none';
        return;
      }

      stepCurrentNumber.innerHTML = currentStep + 1;

      prevBtn.classList.remove('_disabled');
      prevBtn.disabled = false;
      steps[currentStep - 1].classList.remove('_current');
      steps[currentStep].classList.add('_current');
    }
    // шаг назад
    function prevStep(e) {
      if (currentStep === steps.length - 2) {
        stepCurrentNumber.parentNode.classList.remove('_ready');
      }

      if (currentStep === steps.length - 3) {
        nextBtn.classList.remove('_disabled');
      }

      if (prevBtn.classList.contains('_disabled')) {
        return;
      }
      currentStep--;
      stepCurrentNumber.innerHTML = currentStep + 1;

      if (currentStep === 0) {
        prevBtn.classList.add('_disabled');
        prevBtn.disabled = true;
      }
      nextBtn.disabled = false;
      steps[currentStep + 1].classList.remove('_current');
      steps[currentStep].classList.add('_current');
    }

    // валидация чекбокса
    function isValidateFormService() {
      for (let i = 0; i < inputChecks.length; i++) {
        const element = inputChecks[i];
        if (element.checked) {
          isCheck = true;
          return;
        }
      }
      isCheck = false;
      return;
    }
    qwizFrom.addEventListener('submit', function (e) {
      e.preventDefault();
      var th = $('#services_quiz_form');
      $('.load__preloader').fadeIn('', function () {
        $.ajax({
          type: 'POST',
          url: '/index.php?route=common/footer/quiz_submit',
          data: th.serialize(),
          dataType: 'json',
        }).done(function (json) {
          if (json['success']) {
            $('.load__preloader').fadeOut('slow');
            nextStep();
          }
        });
      });
      return false;
    });
  }
  if (qwizCalc) {
    const inputChecks = document.querySelectorAll('.form-qwiz__input');
    const steps = document.querySelectorAll('.form-qwiz__step');
    const prevBtn = document.querySelector('.qwiz-section__prev-btn');
    const nextBtn = document.querySelector('.qwiz-section__next-btn');
    const bottomPanel = document.querySelector('.qwiz-section__bottom');
    const navigatePanel = document.querySelector('.qwiz-section__navigate ');
    const stepCurrentNumber = document.querySelector(
      '.qwiz-section__current-step'
    );
    const radioBtn = document.querySelectorAll(
      'input[name="Место отвода воды из септика"]'
    );
    const oneRadioBtns = document.querySelectorAll(
      'input[name="Глубина залегания трубы"]'
    );
    const twoRadioBtns = document.querySelectorAll(
      'input[name="Место отвода воды из септика"]'
    );
    const threeRadioBtns = document.querySelectorAll(
      'input[name="Количество колец"]'
    );
    const restartBtn = document.querySelector('.form-qwiz__restart-btn');
    let currentStep = 0;
    let isCheck = true;
    let statusQuestion = false;

    radioBtn.forEach((radio) => {
      radio.addEventListener('change', () => {
        if (radio.value === 'Дренажный колодец') {
          statusQuestion = true;
          return;
        }
        statusQuestion = false;
      });
    });

    nextBtn.addEventListener('click', nextStep);
    prevBtn.addEventListener('click', prevStep);

    if (document.querySelector('.qwiz-section__finish-step')) {
      document.querySelector('.qwiz-section__finish-step').innerHTML = `/${
        steps.length - 1
      }`;
    }

    // кнопка заказать занова
    if (restartBtn) {
      restartBtn.addEventListener('click', function (e) {
        currentStep = 0;
        stepCurrentNumber.innerHTML = 'Шаг 1';
        prevBtn.classList.add('_disabled');
        steps[0].classList.add('_current');
        steps[steps.length - 1].classList.remove('_current');
        navigatePanel.style.display = 'flex';
        prevBtn.style.display = 'none';
        document.querySelector('.qwiz-section__progress-step').style.display =
          'flex';
        navigatePanel.style.justifyContent = 'flex-end';
        deleteCheck(oneRadioBtns);
        deleteCheck(twoRadioBtns);
        deleteCheck(threeRadioBtns);
      });
    }

    // ==============================================================================

    function deleteCheck(selector) {
      selector.forEach((el) => {
        el.checked = false;
      });
    }

    function checkRadioValue(selector) {
      let res = false;
      selector.forEach((el) => {
        if (el.checked) {
          res = true;
        }
      });
      return res;
    }

    function eventRadio(selector) {
      if (selector) {
        selector.forEach((it) => {
          it.addEventListener('click', () => clickRadioCheck(selector));
        });
      }
    }

    function clickRadioCheck(slector) {
      checkRadioValue(slector);
      nextBtn.classList.remove('_disabled');
    }
    eventRadio(oneRadioBtns);
    eventRadio(twoRadioBtns);
    eventRadio(threeRadioBtns);
    // шаг вперед
    function nextStep(e) {
      let isOneRadio = checkRadioValue(oneRadioBtns);
      let isTwoRadio = checkRadioValue(twoRadioBtns);
      let isThreeRadio = checkRadioValue(threeRadioBtns);
      console.log(currentStep);

      if (currentStep == 2 && !statusQuestion) {
        nextBtn.classList.remove('_disabled');
      }
      // ==== 3
      if (currentStep === 2 && !isThreeRadio && statusQuestion) {
        nextBtn.classList.add('_disabled');
      }
      if (currentStep === 3 && !isThreeRadio) {
        return;
      }
      // ==== 2
      if (currentStep === 1 && !isTwoRadio) {
        nextBtn.classList.add('_disabled');
      }
      if (currentStep === 2 && !isTwoRadio) {
        return;
      }
      // ==== 1
      if (currentStep === 0 && !isOneRadio) {
        nextBtn.classList.add('_disabled');
      }

      if (currentStep === 1 && !isOneRadio) {
        return;
      }
      ++currentStep;

      isValidateFormService();

      if (steps.length === currentStep + 1) {
        document.querySelector('.qwiz-section__progress-step').style.display =
          'none';
      }

      if (steps.length - 2 === currentStep) {
        navigatePanel.style.display = 'none';
      }
      if (currentStep === 1) {
        prevBtn.style.display = 'inline-block';
        navigatePanel.style.justifyContent = 'space-between';
      }

      if (isCheck && currentStep === steps.length - 2) {
        stepCurrentNumber.parentNode.classList.add('_ready');
      }

      if (steps.length - 1 === currentStep) {
        navigatePanel.style.display = 'none';
      }
      if (bottomPanel && steps.length - 2 === currentStep) {
        bottomPanel.style.display = 'none';
      }

      if (
        steps[currentStep].closest('._additional-question') &&
        !statusQuestion
      ) {
        switchCurrentClassName(currentStep - 1, currentStep + 1, nextBtn);
        currentStep = 4;
        editCountStepText(`Шаг ${currentStep}`);
        return;
      }
      prevBtn.classList.remove('_disabled');
      prevBtn.disabled = false;
      //прибаляем шаги +1
      if (statusQuestion) {
        editCountStepText(`Шаг ${currentStep}`);
      } else {
        editCountStepText(`Шаг ${currentStep + 1}`);
      }

      // на последнем шагу добавляет текст 'Итоги'
      if (steps.length - 1 === currentStep + 1) {
        showReusltSeptik();
        editCountStepText('Итоги');
      }
      //есди есть доп.вопрос добавляем 'Дополнительный вопрос'
      if (
        steps[currentStep].closest('._additional-question') &&
        statusQuestion
      ) {
        editCountStepText('Дополнительный вопрос');

        switchCurrentClassName(currentStep - 1, currentStep, prevBtn);
        return;
      }
      switchCurrentClassName(currentStep - 1, currentStep, prevBtn);
    }

    // шаг назад
    function prevStep(e) {
      let isTwoRadio = checkRadioValue(twoRadioBtns);
      if (currentStep == 3 && isTwoRadio) {
        nextBtn.classList.remove('_disabled');
      }
      if (currentStep == 1) {
        nextBtn.classList.remove('_disabled');
      }

      currentStep--;

      // проверка, покать доп.вопрос
      if (
        steps[currentStep].closest('._additional-question') &&
        !statusQuestion
      ) {
        switchCurrentClassName(currentStep + 1, currentStep - 1, nextBtn);
        currentStep = 2;
        editCountStepText(`Шаг ${currentStep + 1}`);
        return;
      }

      //доп.вопрос проверка текст
      if (
        steps[currentStep].closest('._additional-question') &&
        statusQuestion
      ) {
        editCountStepText('Дополнительный вопрос');
      } else {
        editCountStepText(`Шаг ${currentStep + 1}`);
      }

      if (currentStep === 0) {
        prevBtn.style.display = 'none';
        navigatePanel.style.justifyContent = 'flex-end';
        prevBtn.classList.add('_disabled');
        prevBtn.disabled = true;
      }
      nextBtn.disabled = false;
      switchCurrentClassName(currentStep + 1, currentStep);
    }

    // валидация чекбокса
    function isValidateFormService() {
      for (let i = 0; i < inputChecks.length; i++) {
        const element = inputChecks[i];
        if (element.checked) {
          isCheck = true;
          return;
        }
      }
      isCheck = false;
      return;
    }
    // меняем текст шага
    function editCountStepText(text) {
      stepCurrentNumber.innerHTML = text;
    }
    // меняем класс  у текущего шага
    function switchCurrentClassName(stepRemove, stepAdd) {
      steps[stepRemove].classList.remove('_current');
      steps[stepAdd].classList.add('_current');
    }
    qwizCalc.addEventListener('submit', function (e) {
      e.preventDefault();
      var th = $('#calc-septik');
      $('.load__preloader').fadeIn('', function () {
        $.ajax({
          type: 'POST',
          url: '/index.php?route=common/footer/quiz_submit',
          data: th.serialize(),
          dataType: 'json',
        }).done(function (json) {
          if (json['success']) {
            $('.load__preloader').fadeOut('slow');
            nextStep();
          }
        });
      });
      return false;
    });
  }
}
initQwiz();
// кнопеи сантехники
function countPlumbingItems(params) {
  const plusBtn = document.querySelectorAll('.form-qwiz__btns-plumbing');

  if (plusBtn) {
    plusBtn.forEach((element) => {
      element.addEventListener('click', function (e) {
        let target = e.target;

        if (target.closest('._plus-plumbing')) {
          if (element.children[1].innerHTML >= 5) return;
          element.children[1].innerHTML++;
        }
        if (target.closest('._minus-plumbing')) {
          if (element.children[1].innerHTML <= 0) return;
          element.children[1].innerHTML--;
        }
      });
    });
  }
}
countPlumbingItems();

// расчет производительности на всю сантехнику дома (раковины, ванна, туалет и т.д)
function getValueItemPlumbing() {
  const selectorsCount = document.querySelectorAll(
    '.form-qwiz__count-plumbing'
  );
  let resSum = 0;
  let currentSum = 0;
  selectorsCount.forEach((element) => {
    let dataValue = element.dataset.plumbingValue;
    currentSum = dataValue * element.innerHTML;
    resSum += currentSum;
  });

  return resSum;
}

// выводим данные в итоги
function showReusltSeptik(res) {
  const listResSelector = document.querySelectorAll(
    '.form-qwiz__content-finish'
  );
  const result = collectDate();

  listResSelector[0].innerHTML = result.onePoint;
  listResSelector[1].innerHTML = result.threePoint;
  listResSelector[2].innerHTML = result.twoPoint;

  listResSelector[4].innerHTML = result.fourPoint;
  if (!result.extraPoint) {
    listResSelector[3].parentElement.remove();
  } else {
    listResSelector[3].innerHTML = result.extraPoint;
  }
  debugger;
}

function collectDate() {
  const onePoint = document.querySelector('.noUi-handle').ariaValueText;
  const twoPoint = document.querySelectorAll(
    'input[name="Глубина залегания трубы"]'
  );
  const threePoint = document.querySelectorAll(
    'input[name="Место отвода воды из септика"]'
  );

  const extraPoint = document.querySelectorAll(
    'input[name="Количество колец"]'
  );
  const res = {
    onePoint,
    twoPoint: '',
    threePoint: '',
    fourPoint: '',
    extraPoint: '',
  };
  if (twoPoint) {
    twoPoint.forEach((el) => {
      if (el.checked) {
        res.twoPoint = el.value;
      }
    });
  }
  if (threePoint) {
    threePoint.forEach((el) => {
      if (el.checked) {
        res.threePoint = el.value;
      }
    });
  }
  if (extraPoint) {
    extraPoint.forEach((el) => {
      if (el.checked) {
        res.extraPoint = el.value;
      }
    });
  }
  res.fourPoint = getValueItemPlumbing();

  return res;
}
