(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    const popupLinks = document.querySelectorAll(".popup-link");
    const body = document.querySelector("body");
    const lockPadding = document.querySelectorAll(".lock-padding");
    let unlock = true;
    const timeout = 0;
    if (popupLinks.length > 0) for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", (function(e) {
            const popupName = popupLink.getAttribute("href").replace("#", "");
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
        }));
    }
    const popupCloseIcon = document.querySelectorAll(".close-popup");
    if (popupCloseIcon.length > 0) for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", (function(e) {
            popupClose(el.closest(".popup"));
            e.preventDefault();
        }));
    }
    function popupOpen(curentPopup) {
        if (curentPopup && unlock) {
            const popupActive = document.querySelector(".popup.open");
            if (popupActive) popupClose(popupActive, false); else popup_bodyLock();
            curentPopup.classList.add("open");
            curentPopup.addEventListener("click", (function(e) {
                if (!e.target.closest(".popup__content")) popupClose(e.target.closest(".popup"));
            }));
        }
    }
    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove("open");
            if (doUnlock) bodyUnLock();
        }
    }
    console.log($(window).innerWidth());
    console.log(document.querySelector(".wrapper").offsetWidth);
    function popup_bodyLock() {
        const lockPaddingValue = $(window).innerWidth() - document.querySelector(".wrapper").offsetWidth + "px";
        if (lockPadding.length > 0) for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
        body.style.paddingRight = lockPaddingValue;
        body.classList.add("lock");
        unlock = false;
        setTimeout((function() {
            unlock = true;
        }), timeout);
    }
    function bodyUnLock() {
        setTimeout((function() {
            if (lockPadding.length > 0) for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = "0px";
            }
            body.style.paddingRight = "0px";
            body.classList.remove("lock");
        }), timeout);
        unlock = false;
        setTimeout((function() {
            unlock = true;
        }), timeout);
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    const rangeInput = document.querySelector(".range__input");
    const rangeProgress = document.querySelector(".range__progress");
    const rangeInfo = document.querySelector(".range__input-info");
    const rangeInputP = document.querySelector(".range__input-p");
    const rangeProgressP = document.querySelector(".range__progress-p");
    const rangeInfoP = document.querySelector(".range__input-info-p");
    const steps = document.querySelectorAll(".step-s");
    const stepNumbers = document.querySelectorAll(".step-n__number");
    document.querySelectorAll(".step-n__number_circle");
    document.querySelectorAll(".step-n__gap");
    const script_form = document.querySelector(".step-s__form");
    const prevBtn = document.querySelectorAll(".step-s__prev_btn");
    const nextBtn = document.querySelectorAll(".step-s__next_btn");
    const moduleInputs = document.querySelectorAll(".module-s__input");
    const moduleBodyLong = document.querySelector(".module-s__body");
    const moduleBodyShort = document.querySelector(".module-s__body-short");
    const conversionBtn = document.querySelectorAll(".bacc");
    const conversionBlock = document.querySelectorAll(".item-conversion");
    const lastNumber = document.querySelector(".last-numberr");
    const resss = document.querySelector(".item-conv__button-reset");
    conversionBtn.forEach((button => {
        button.addEventListener("click", (function(e) {
            conversionBlock.forEach((block => {
                block.classList.toggle("dis-n");
            }));
        }));
    }));
    if (moduleInputs) moduleInputs.forEach((item => {
        item.oninput = function() {
            if ("yes" == this.value) {
                moduleBodyShort.style.display = "none";
                moduleBodyLong.style.display = "block";
            } else {
                moduleBodyShort.style.display = "block";
                moduleBodyLong.style.display = "none";
            }
        };
    }));
    if (rangeInput) {
        rangeInput.oninput = function() {
            let valu = this.value - 1;
            valu = valu / 4 * 100;
            rangeProgress.style.width = valu + "%";
            rangeInfo.value = this.value;
        };
        rangeInfo.oninput = function() {
            rangeProgress.style.width = 25 * this.value - 25 + "%";
            rangeInput.value = this.value;
        };
        $(".only-numbers").keypress((function(event) {
            event = event || window.event;
            if (event.charCode && 0 != event.charCode && (event.charCode < 48 || event.charCode > 57)) return false;
        }));
        $(".only-numberss").keypress((function(event) {
            event = event || window.event;
            if (event.charCode && 0 != event.charCode && (event.charCode < 49 || event.charCode > 53)) return false;
        }));
    }
    if (rangeInputP) {
        rangeInputP.oninput = function() {
            rangeProgressP.style.width = this.value + "%";
            rangeInfoP.value = this.value + "%";
        };
        rangeInfoP.oninput = function(params) {
            rangeProgressP.style.width = 1 * this.value + 1 + "%";
            rangeInputP.value = this.value;
        };
        $(".only-numbers").keypress((function(event) {
            event = event || window.event;
            if (event.charCode && 0 != event.charCode && (event.charCode < 48 || event.charCode > 57)) return false;
        }));
    }
    function formSteps() {
        if (script_form) script_form.addEventListener("submit", (e => e.preventDefault()));
        var formStepIndex = 0;
        if (prevBtn.length > 0 || nextBtn.length > 0) {
            for (let i = 0; i < prevBtn.length; i++) prevBtn[i].addEventListener("click", (() => {
                formStepIndex--;
                updateFormSteps();
            }));
            for (let i = 0; i < nextBtn.length; i++) nextBtn[i].addEventListener("click", (() => {
                formStepIndex++;
                updateFormSteps();
            }));
        }
        for (let i = 0; i < steps.length; i++) stepNumbers[i].addEventListener("click", (() => {
            formStepIndex = i;
            updateFormSteps();
        }));
        function updateFormSteps() {
            steps.forEach((step => {
                step.classList.contains("active") && step.classList.remove("active");
            }));
            stepNumbers.forEach((step => {
                step.classList.contains("active-number") && step.classList.remove("active-number");
            }));
            steps[formStepIndex].classList.add("active");
            stepNumbers[formStepIndex].classList.add("active-number");
            if (prevBtn.length > 0 || nextBtn.length > 0) {
                if (0 === formStepIndex) prevBtn.forEach((button => {
                    button.style.opacity = "0";
                    button.style.pointerEvents = "none";
                })); else prevBtn.forEach((button => {
                    button.style.opacity = "1";
                    button.style.pointerEvents = "all";
                }));
                if (lastNumber) if (lastNumber.classList.contains("active-number")) {
                    document.body.classList.add("main-purpure");
                    resss.classList.add("res-white");
                } else {
                    document.body.classList.remove("main-purpure");
                    resss.classList.remove("res-white");
                }
                if (formStepIndex === steps.length - 1) nextBtn.forEach((button => {
                    button.innerHTML = "Готово";
                })); else nextBtn.forEach((button => {
                    button.innerHTML = "Далее";
                }));
                if ("Готово" == nextBtn[formStepIndex].innerHTML) nextBtn[formStepIndex].addEventListener("click", (function() {
                    script_form.submit();
                }));
            }
        }
        updateFormSteps();
    }
    if (document.querySelector(".step-s")) formSteps();
    $(document).ready((function() {
        $("body").on("click", ".number-minus, .number-plus", (function() {
            var $row = $(this).closest(".number");
            var $input = $row.find(".number-text");
            var step = $row.data("step");
            var val = parseFloat($input.val());
            if ($(this).hasClass("number-minus")) val -= step; else val += step;
            $input.val(val);
            $input.change();
            return false;
        }));
        $("body").on("change", ".number-text", (function() {
            var $input = $(this);
            var $row = $input.closest(".number");
            var step = $row.data("step");
            var min = parseInt($row.data("min"));
            var max = parseInt($row.data("max"));
            var val = parseFloat($input.val());
            if (isNaN(val)) val = step; else if (min && val < min) val = min; else if (max && val > max) val = max;
            $input.val(val);
        }));
    }));
    $(document).ready((function() {
        $("body").on("click", ".order__grid-btn", (function() {
            $(this).toggleClass("add-btn-active");
            if ($(this).hasClass("add-btn-active")) $(this).html("Добавлено"); else $(this).html("Добавить");
        }));
    }));
    $(document).ready((function() {
        $("body").on("click", ".order__recommended-btn", (function() {
            $(this).toggleClass("add-btn-active");
            if ($(this).hasClass("add-btn-active")) {
                $(this).html("Убрать всё");
                $(".order__grid-btn").addClass("add-btn-active");
                $(".order__grid-btn").html("Добавлено");
            } else {
                $(this).html("Добавить всё");
                $(".order__grid-btn").html("Добавить");
                $(".order__grid-btn").removeClass("add-btn-active");
            }
        }));
    }));
    $(document).ready((function() {
        $(".product__spoiler-title").click((function(e) {
            if ($(".product__filter-content").hasClass("one")) {
                $(".product__spoiler-title").not($(this)).removeClass("activeFilter");
                $(".product__spoiler-select").not($(this).next()).slideUp(300);
            }
            $(this).toggleClass("activeFilter").next().slideToggle(300);
        }));
    }));
    var el = $(".el-map").html();
    if (!el) ; else {
        const cityBlock1 = document.getElementById("city-block1");
        const cityBlock2 = document.getElementById("city-block2");
        const cityBlock3 = document.getElementById("city-block3");
        document.getElementById("city1").addEventListener("click", (function() {
            if (cityBlock1.classList.contains("city-block-active")) cityBlock1.classList.remove("city-block-active"); else {
                cityBlock1.classList.add("city-block-active");
                cityBlock2.classList.remove("city-block-active");
                cityBlock3.classList.remove("city-block-active");
            }
        }));
        document.getElementById("city2").addEventListener("click", (function() {
            if (cityBlock2.classList.contains("city-block-active")) cityBlock2.classList.remove("city-block-active"); else {
                cityBlock2.classList.add("city-block-active");
                cityBlock1.classList.remove("city-block-active");
                cityBlock3.classList.remove("city-block-active");
            }
        }));
        document.getElementById("city3").addEventListener("click", (function() {
            if (cityBlock3.classList.contains("city-block-active")) cityBlock3.classList.remove("city-block-active"); else {
                cityBlock3.classList.add("city-block-active");
                cityBlock2.classList.remove("city-block-active");
                cityBlock1.classList.remove("city-block-active");
            }
        }));
    }
    function preloadTrans() {
        $(window).on("load", (function() {
            $("body").removeClass("preload");
        }));
    }
    preloadTrans();
    const selectSingle = document.querySelector(".__select");
    const selectSingle_title = selectSingle.querySelector(".__select__title");
    const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");
    selectSingle_title.addEventListener("click", (() => {
        if ("active" === selectSingle.getAttribute("data-state")) selectSingle.setAttribute("data-state", ""); else selectSingle.setAttribute("data-state", "active");
    }));
    for (let i = 0; i < selectSingle_labels.length; i++) selectSingle_labels[i].addEventListener("click", (evt => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute("data-state", "");
    }));
    const selectSingle1 = document.querySelector(".__select-1");
    const selectSingle_title1 = selectSingle1.querySelector(".__select__title-1");
    const selectSingle_labels1 = selectSingle1.querySelectorAll(".__select__label-1");
    selectSingle_title1.addEventListener("click", (() => {
        if ("active1" === selectSingle1.getAttribute("data-state")) selectSingle1.setAttribute("data-state", ""); else selectSingle1.setAttribute("data-state", "active1");
    }));
    for (let i = 0; i < selectSingle_labels1.length; i++) selectSingle_labels1[i].addEventListener("click", (evt => {
        selectSingle_title1.textContent = evt.target.textContent;
        selectSingle1.setAttribute("data-state", "");
    }));
    window["FLS"] = true;
    isWebp();
})();