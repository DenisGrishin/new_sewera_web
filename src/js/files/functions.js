// Вспомогательные модули плавного расскрытия и закрытия объекта ======================================================================================================================================================================
export let _slideUp = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty('height') : null;
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      !showmore ? target.style.removeProperty('overflow') : null;
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};
export let _slideDown = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty('height') : null;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};
export let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};
// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
// Вспомогательные модули блокировки прокрутки и скочка ====================================================================================================================================================================================================================================================================================
export let bodyLockStatus = true;
export let bodyLockToggle = (delay = 1) => {
  if (document.documentElement.classList.contains('lock')) {
    bodyUnlock(delay);
  } else {
    bodyLock(delay);
  }
};
export let bodyUnlock = (delay = 1) => {
  let body = document.querySelector('body');
  if (bodyLockStatus) {
    let lock_padding = document.querySelectorAll('[data-lp]');
    setTimeout(() => {
      for (let index = 0; index < lock_padding.length; index++) {
        const el = lock_padding[index];
        el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      document.documentElement.classList.remove('lock');
    }, delay);
    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
export let bodyLock = (delay = 1) => {
  let body = document.querySelector('body');
  if (bodyLockStatus) {
    let lock_padding = document.querySelectorAll('[data-lp]');
    for (let index = 0; index < lock_padding.length; index++) {
      const el = lock_padding[index];
      el.style.paddingRight =
        window.innerWidth -
        document.querySelector('.wrapper').offsetWidth +
        'px';
    }

    body.style.paddingRight =
      window.innerWidth - document.querySelector('body').offsetWidth + 'px';
    document.documentElement.classList.add('lock');

    bodyLockStatus = false;
    setTimeout(function () {
      bodyLockStatus = true;
    }, delay);
  }
};
// Модуль работы со спойлерами =======================================================================================================================================================================================================================
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.

Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/
export function spollers() {
  const spollersArray = document.querySelectorAll('[data-spollers]');
  if (spollersArray.length > 0) {
    // Получение обычных слойлеров
    const spollersRegular = Array.from(spollersArray).filter(function (
      item,
      index,
      self
    ) {
      return !item.dataset.spollers.split(',')[0];
    });
    // Инициализация обычных слойлеров
    if (spollersRegular.length) {
      initSpollers(spollersRegular);
    }

    // Инициализация
    function initSpollers(spollersArray, matchMedia = false) {
      spollersArray.forEach((spollersBlock) => {
        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
        if (matchMedia.matches || !matchMedia) {
          spollersBlock.classList.add('_spoller-init');
          initSpollerBody(spollersBlock);
          spollersBlock.addEventListener('click', setSpollerAction);
        } else {
          spollersBlock.classList.remove('_spoller-init');
          initSpollerBody(spollersBlock, false);
          spollersBlock.removeEventListener('click', setSpollerAction);
        }
      });
    }
    // Работа с контентом
    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
      const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
      if (spollerTitles.length > 0) {
        spollerTitles.forEach((spollerTitle) => {
          if (hideSpollerBody) {
            spollerTitle.removeAttribute('tabindex');
            if (!spollerTitle.classList.contains('_spoller-active')) {
              spollerTitle.nextElementSibling.hidden = true;
            }
          } else {
            spollerTitle.setAttribute('tabindex', '-1');
            spollerTitle.nextElementSibling.hidden = false;
          }
        });
      }
    }
    function setSpollerAction(e) {
      const el = e.target;
      if (el.closest('[data-spoller]')) {
        const spollerTitle = el.closest('[data-spoller]');
        const spollersBlock = spollerTitle.closest('[data-spollers]');
        const oneSpoller = spollersBlock.hasAttribute('data-one-spoller')
          ? true
          : false;
        if (!spollersBlock.querySelectorAll('._slide').length) {
          if (
            oneSpoller &&
            !spollerTitle.classList.contains('_spoller-active')
          ) {
            hideSpollersBody(spollersBlock);
          }
          spollerTitle.classList.toggle('_spoller-active');
          _slideToggle(spollerTitle.nextElementSibling, 300);
        }
        e.preventDefault();
      }
    }
    function hideSpollersBody(spollersBlock) {
      const spollerActiveTitle = spollersBlock.querySelector(
        '[data-spoller]._spoller-active'
      );
      if (spollerActiveTitle) {
        spollerActiveTitle.classList.remove('_spoller-active');
        _slideUp(spollerActiveTitle.nextElementSibling, 300);
      }
    }
  }
}
// Модуль "показать еще" =======================================================================================================================================================================================================================
/*
Документация по работе в шаблоне:
data-showmore-media = "768,min"
data-showmore="size/items"
data-showmore-content="размер/кол-во"
data-showmore-button="скорость"
Сниппет (HTML): showmore
*/
export function showMore() {
  const showMoreBlocks = document.querySelectorAll('[data-showmore]');
  let showMoreBlocksRegular;
  let mdQueriesArray;

  if (showMoreBlocks.length) {
    // Получение обычных объектов
    showMoreBlocksRegular = Array.from(showMoreBlocks).filter(function (
      item,
      index,
      self
    ) {
      return !item.dataset.showmoreMedia;
    });
    // Инициализация обычных объектов
    showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;

    document.querySelectorAll('[data-showmore-button]').forEach((element) => {
      element.addEventListener('click', showMoreActions, true);
    });
    // window.addEventListener('resize', showMoreActions);
  }
  function initItemsMedia(mdQueriesArray) {
    mdQueriesArray.forEach((mdQueriesItem) => {
      initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
    });
  }
  function initItems(showMoreBlocks, matchMedia) {
    showMoreBlocks.forEach((showMoreBlock) => {
      initItem(showMoreBlock, matchMedia);
    });
  }
  function initItem(showMoreBlock, matchMedia = false) {
    showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;
    const showMoreContent = showMoreBlock.querySelector(
      '[data-showmore-content]'
    );
    const showMoreButton = showMoreBlock.querySelector(
      '[data-showmore-button]'
    );
    const hiddenHeight = getHeight(showMoreBlock, showMoreContent);

    if (matchMedia.matches || !matchMedia) {
      if (hiddenHeight < getOriginalHeight(showMoreContent)) {
        _slideUp(showMoreContent, 0, hiddenHeight);
        showMoreButton.hidden = false;
      } else {
        _slideDown(showMoreContent, 0, hiddenHeight);
        showMoreButton.hidden = true;
      }
    } else {
      _slideDown(showMoreContent, 0, hiddenHeight);
      showMoreButton.hidden = true;
    }
  }
  function getHeight(showMoreBlock, showMoreContent) {
    let hiddenHeight = 0;
    const showMoreType = showMoreBlock.dataset.showmore
      ? showMoreBlock.dataset.showmore
      : 'size';
    if (showMoreType === 'items') {
      const showMoreTypeValue = showMoreContent.dataset.showmoreContent
        ? showMoreContent.dataset.showmoreContent
        : 3;
      const showMoreItems = showMoreContent.children;
      for (let index = 1; index < showMoreItems.length; index++) {
        const showMoreItem = showMoreItems[index - 1];
        hiddenHeight += showMoreItem.offsetHeight;
        if (index === showMoreTypeValue) break;
      }
    } else {
      const showMoreTypeValue = showMoreContent.dataset.showmoreContent
        ? showMoreContent.dataset.showmoreContent
        : 150;
      hiddenHeight = showMoreTypeValue;
    }
    return hiddenHeight;
  }

  function getOriginalHeight(showMoreContent) {
    let hiddenHeight = showMoreContent.offsetHeight;
    showMoreContent.style.removeProperty('height');
    let originalHeight = showMoreContent.offsetHeight;
    showMoreContent.style.height = `${hiddenHeight}px`;

    return originalHeight;
  }
  function showMoreActions(e) {
    const targetEvent = e.target;
    const targetType = e.type;
    if (targetType === 'click') {
      if (targetEvent.closest('[data-showmore-button]')) {
        const showMoreButton = targetEvent.closest('[data-showmore-button]');
        const showMoreBlock = showMoreButton.closest('[data-showmore]');
        const showMoreContent = showMoreBlock.querySelector(
          '[data-showmore-content]'
        );
        getOriginalHeight(showMoreContent);
        const showMoreSpeed = showMoreBlock.dataset.showmoreButton
          ? showMoreBlock.dataset.showmoreButton
          : '500';
        const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
        if (!showMoreContent.classList.contains('_slide')) {
          showMoreBlock.classList.contains('_showmore-active')
            ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight)
            : _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
          showMoreBlock.classList.toggle('_showmore-active');
        }
      }
    } else if (targetType === 'resize') {
      showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
      // mdQueriesArray.length ? initItemsMedia(mdQueriesArray) : null;
    }

    if (document.querySelector('.ya-map__tab') && targetType === 'click') {
      if (!e.target.matches('.ya-map__tab')) {
        e.stopImmediatePropagation();
      }
    }
  }
}
// Модуь работы с табами =======================================================================================================================================================================================================================
/*
Для родителя табов пишем атрибут data-tabs
Для родителя заголовков табов пишем атрибут data-tabs-titles
Для родителя блоков табов пишем атрибут data-tabs-body

Если нужно чтобы табы открывались с анимацией 
добавляем к data-tabs data-tabs-animate
По умолчанию, скорость анимации 500ms, 
указать свою скорость можно так: data-tabs-animate="1000"

Если нужно чтобы табы превращались в "спойлеры" на неком размере экранов пишем параметры ширины.
Например: data-tabs="992" - табы будут превращаться в спойлеры на экранах меньше или равно 992px
*/
export function tabs() {
  const tabs = document.querySelectorAll('[data-tabs]');
  let tabsActiveHash = [''];

  if (tabs.length > 0) {
    const hash = '#tab-0-1';
    if (hash.startsWith('tab-')) {
      tabsActiveHash = '#tab-0-1';
    }

    setTimeout(() => {
      tabs.forEach((tabsBlock, index) => {
        tabsBlock.classList.add('_tab-init');
        tabsBlock.setAttribute('data-tabs-index', index);
        tabsBlock.addEventListener('click', setTabsAction);
        initTabs(tabsBlock);
      });
    }, 30);
  }

  // Работа с контентом
  function initTabs(tabsBlock) {
    const tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
    const tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
    const tabsBlockIndex = tabsBlock.dataset.tabsIndex;

    const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

    if (tabsActiveHashBlock) {
      const tabsActiveTitle = tabsBlock.querySelector(
        '[data-tabs-titles]>._tab-active'
      );
      tabsActiveTitle.classList.remove('_tab-active');
    }
    if (tabsContent.length > 0) {
      tabsContent.forEach((tabsContentItem, index) => {
        tabsTitles[index].setAttribute('data-tabs-title', '');
        tabsContentItem.setAttribute('data-tabs-item', '');

        if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
          tabsTitles[index].classList.add('_tab-active');
        }
        tabsContentItem.hidden =
          !tabsTitles[index].classList.contains('_tab-active');
      });
    }
  }
  function setTabsStatus(tabsBlock) {
    const tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
    const tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
    const tabsBlockIndex = tabsBlock.dataset.tabsIndex;

    function isTabsAnamate(tabsBlock) {
      if (tabsBlock.hasAttribute('data-tabs-animate')) {
        return tabsBlock.dataset.tabsAnimate > 0
          ? tabsBlock.dataset.tabsAnimate
          : 500;
      }
    }
    const tabsBlockAnimate = isTabsAnamate(tabsBlock);

    if (tabsContent.length > 0) {
      tabsContent.forEach((tabsContentItem, index) => {
        if (tabsTitles[index].classList.contains('_tab-active')) {
          if (tabsBlockAnimate) {
            _slideDown(tabsContentItem, tabsBlockAnimate);
          } else {
            tabsContentItem.hidden = false;
          }
          if (!tabsContentItem.closest('.popup')) {
            location.hash = `tab-${tabsBlockIndex}-${index}`;
          }
        } else {
          if (tabsBlockAnimate) {
            _slideUp(tabsContentItem, tabsBlockAnimate);
          } else {
            tabsContentItem.hidden = true;
          }
        }
      });
    }
  }
  function setTabsAction(e) {
    const el = e.target;

    if (
      document
        .querySelector('.ya-map__accardion-block ')
        .matches('._showmore-active')
    ) {
      document
        .querySelector('.ya-map__accardion-block ')
        .classList.remove('_showmore-active');
    }
    if (el.closest('.block__more')) {
      return;
    }
    if (el.closest('[data-tabs-title]')) {
      setTimeout(() => {
        showMore();
      }, 10);

      const tabTitle = el.closest('[data-tabs-title]');
      const tabsBlock = tabTitle.closest('[data-tabs]');
      if (
        !tabTitle.classList.contains('_tab-active') &&
        !tabsBlock.querySelectorAll('._slide').length
      ) {
        const tabActiveTitle = tabsBlock.querySelector(
          '[data-tabs-title]._tab-active'
        );
        if (tabActiveTitle) {
          tabActiveTitle.classList.remove('_tab-active');
        }

        tabTitle.classList.add('_tab-active');

        setTabsStatus(tabsBlock);
      }
      e.preventDefault();
    }
  }
}

// Модуль попапов ===========================================================================================================================================================================================================================
/*
Документация по работе в шаблоне:
data-popup - Атрибут для кнопки, которая вызывает попап
data-close - Атрибут для кнопки, которая закрывает попап
data-youtube - Атрибут для кода youtube
Сниппет (HTML): pl
*/
import { Popup } from '../libs/popup.js';
export const initPopups = () => new Popup({});

//================================================================================================================================================================================================================================================================================================================
// Прочие полезные функции ================================================================================================================================================================================================================================================================================================================
//================================================================================================================================================================================================================================================================================================================

//================================================================================================================================================================================================================================================================================================================
