function generateNav(){
    const position = document.getElementsByTagName('nav')[0];
    let navHolder = document.createElement('div');
    navHolder.className = "collapse navbar-collapse justify-content-end align-center text-center";
    navHolder.setAttribute('id', 'main-nav');
    const linkHref = ["#pricing", "#about", "#gallery", "#trainers", "#reviews", "#contact"];
    const linkTxt = ["Pricing", "About", "Gallery", "Staff", "Reviews","Contact"];
    const ulTag = document.createElement('ul');
    ulTag.className = "navbar-nav";
    for(let i=0;i<linkHref.length;i++){
        let liTag = document.createElement('li');
        liTag.className = "nav-item";
        let aTag = document.createElement('a');
        aTag.className = "nav-link";
        aTag.setAttribute('href', linkHref[i]);
        aTag.textContent = linkTxt[i];
        liTag.appendChild(aTag);
        ulTag.appendChild(liTag);
    }
    navHolder.appendChild(ulTag);
    position.firstElementChild.appendChild(navHolder);
}
function generatePricing(){
    const position = document.getElementById('pricing').firstElementChild.lastElementChild;
    //data that we need for creation
    const cardHeadings = ["Starter Edition", "Complete Edition", "Ultimate Edition"];
    const cardSubtitle = ["essential programs only", "more in-depth programs", "personalized approach"];
    const pricingOptions = ["$50", "$100", "$200"];
    const mainText = ["Includes essential training programs, personalized guidance, and progress tracking to get you started on the right path.", "Offers more in-depth programs, regular check-ins, and tailored coaching to help you refine your techniques and reach your fitness goals faster.", "This package includes everything in the personalized performance analysis to help you achieve peak strength and fitness."];
    const pTagsClasses = ["lead card-subtitle", "display-4 my-4 text-primary fw-bold", "card-text mx-5 text-muted d-none d-lg-block"];
    for(let i=0;i<cardHeadings.length;i++){
        let cardHolder = document.createElement('div');
        let card = document.createElement('div');
        let cardBody = document.createElement('div');

        if(i!=1){
            cardHolder.className = "col-8 col-lg-4 col-xl-3";
            card.className ="card border-0";
            cardBody.className = "card-body text-center py-4 shadow-sm";

        }else{
            cardHolder.className = "col-9 col-lg-4 my-4";
            card.className ="card border-primary border-2 shadow";
            let cardHeader = document.createElement('div');
            cardHeader.className = "card-header text-center text-primary";
            cardHeader.textContent = "Most Popular";
            cardBody.className = "card-body text-center py-5";
            card.appendChild(cardHeader);
        }
        card.appendChild(cardBody);
        cardHolder.appendChild(card);
        let cardH4 = document.createElement('h4');
        cardH4.className = "card-title";
        cardH4.textContent = cardHeadings[i];
        cardBody.appendChild(cardH4);
        for(let i=0;i<pTagsClasses.length;i++){
            let cardP = document.createElement('p');
            cardP.className = pTagsClasses[i];
            cardBody.appendChild(cardP);
        }
        cardBody.firstElementChild.nextElementSibling.textContent = cardSubtitle[i];
        cardBody.firstElementChild.nextElementSibling.nextElementSibling.textContent = pricingOptions[i];
        cardBody.lastElementChild.textContent = mainText[i];
        position.appendChild(cardHolder);
    }
}
function generateStaff(){
    const staffImgSrc = ["assets/img/trainer1.jpg", "assets/img/trainer2.jpg", "assets/img/trainer3.jpg"];
    const staffName = ["Coach John", "Coach Sam", "Coach Alex"];
    const staffSpecialty = ["Bodybuilding Coach", "Powerlifting Coach", "Weightlifting Coach"];
    const staffDescription = ["With over 10 years of experience in the fitness industry, Coach John is a dedicated bodybuilding expert passionate about transforming physiques through discipline, nutrition, and training. Having competed in multiple bodybuilding competitions, John knows exactly what it takes to build muscle, achieve definition, and sculpt the body to its full potential. He combines his knowledge of progressive resistance training with a deep understanding of nutrition to craft customized programs that help clients build lean muscle and improve overall physique.", "Coach Sam is a seasoned powerlifter with a background in competitive lifting and a deep understanding of strength development. With over 8 years of experience in coaching, Sam specializes in the three key movements: squat, bench press, and deadlift. His approach focuses on proper technique and individualized programming to help clients build raw strength and improve their performance in powerlifting competitions. Sam’s passion for helping others achieve their maximum lifting potential is matched only by his dedication to pushing each athlete to surpass their limits.", "An expert in Olympic weightlifting, Coach Alex has a deep understanding of the sport’s technical demands and a proven track record of coaching athletes to success. With over 7 years of coaching experience, Alex has worked with athletes of all skill levels, from beginners to elite competitors. His focus is on mastering the Snatch and Clean & Jerk, while ensuring mobility, flexibility, and strength are optimized. Alex emphasizes precise technique, mental focus, and periodized training to help athletes progress safely and effectively."];
    const position = document.getElementById('staff-position');
    for(let i = 0;i<staffName.length;i++){
        let card = document.createElement('div');
        card.className = "card c-width my-3 shadow";
        let cardImg = document.createElement('img');
        cardImg.setAttribute('src', staffImgSrc[i]);
        cardImg.setAttribute('alt', `coach${i + 1}`);
        cardImg.className = "card-img-top";
        card.appendChild(cardImg);

        let cardBody = document.createElement('div');
        cardBody.className = "card-body text-center";

        let coachNameP = document.createElement('p');
        coachNameP.className = "card-title fs-5 fw-semibold";
        coachNameP.textContent = staffName[i];
        cardBody.appendChild(coachNameP);

        let coachSpecialtyP = document.createElement('p');
        coachSpecialtyP.className = "card-text";
        coachSpecialtyP.textContent = staffSpecialty[i];
        cardBody.appendChild(coachSpecialtyP);

        let readMoreBtn = document.createElement('input');
        readMoreBtn.setAttribute('type', 'button');
        readMoreBtn.setAttribute('value', 'Read More');
        readMoreBtn.className = "btn btn-outline-dark mb-3 btn-sm rdMore";
        cardBody.appendChild(readMoreBtn);

        let rdMoreTxt = document.createElement('p');
        rdMoreTxt.className = "card-text text-start";
        rdMoreTxt.textContent = staffDescription[i];
        rdMoreTxt.style.display = "none";
        cardBody.appendChild(rdMoreTxt);

        card.appendChild(cardBody);
        position.appendChild(card);
    }
}
function generateReviews(){
    const position = document.getElementById('reviews-position');
    const reviewTitle = ["Great approach for beginners", "LiftMastery has been the game-changer in my training", "Expert guidance makes every session easy"];
    const reviewContent = ["I've been training with LiftMastery for the past 6 months, and the progress I've made is beyond what I expected. Coach John has helped me gain muscle and refine my physique with a program that's tailored specifically to my goals. The personalized coaching and constant support have made all the difference.", "I've been powerlifting for a few years, but after working with Coach Sam at LiftMastery, my lifts have skyrocketed. His attention to detail in correcting my form and creating a program focused on strength progression has helped me smash personal records.", "Joining LiftMastery was the best decision I made for my weightlifting career. Coach Alex helped me improve my technique on the Snatch and Clean & Jerk, and I've seen incredible improvements in my lifts and overall strength. The personalized coaching and structured approach have really helped me."];
    const reviewCreator = ["review by James", "review by Winston", "review by Clarence"];
    for(let i=0;i<reviewTitle.length;i++){
        let rowReview = document.createElement('div');
        rowReview.className = "row justify-content-center mb-2";

        let colReview = document.createElement('div');
        colReview.className = "col-lg-8";
        rowReview.appendChild(colReview);

        let card = document.createElement('div');
        card.className = "card mb-3 shadow-sm";

        let cardHeader = document.createElement('div');
        cardHeader.className = "card-header py-2";
        //star generator
        for(let i=0;i<5;i++){
            let star = document.createElement('i');
            star.className = "bi bi-star-fill";
            cardHeader.appendChild(star);
        }
        card.appendChild(cardHeader);

        let cardBody = document.createElement('div');
        cardBody.className = "card-body";

        let revTitle = document.createElement('h5');
        revTitle.className = "card-title mb-1";
        revTitle.textContent = reviewTitle[i];
        cardBody.appendChild(revTitle);

        let revTxt = document.createElement('p');
        revTxt.className = "card-text mb-1";
        revTxt.textContent = reviewContent[i];
        cardBody.appendChild(revTxt);

        let revBy = document.createElement('small');
        revBy.textContent = reviewCreator[i];
        cardBody.appendChild(revBy);
        card.appendChild(cardBody);

        colReview.appendChild(card);
        position.appendChild(rowReview);
    }
    console.log(position);
   
}
function generateAccordion(){
    const accordHeadings = ["Our Mission", "Why Choose LiftMastery?", "Our Approach"];
    const accordText = ["At LiftMastery, we believe that every lift is an opportunity to unlock your true potential. Whether you're just starting out on your fitness journey or you're an experienced lifter looking to elevate your performance, we're here to help you master your craft and achieve lasting results.", "Founded by a team of passionate trainers and strength experts, LiftMastery is dedicated to providing top-tier training programs tailored to your goals. We specialize in weightlifting, powerlifting, and general fitness, offering personalized coaching that focuses on form, technique, and progressive strength building.", "Our mission is simple: to help you transform your body, mind, and strength through expert guidance, structured training, and unwavering support. We understand that every person is unique, which is why our programs are designed to meet you where you are and help you get to where you want to be."];
    const position = document.getElementById('about').firstElementChild.lastElementChild.lastElementChild;

    let accordDiv = document.createElement("div");
    accordDiv.className = "accord mx-auto mt-2";

    for(let i=0; i< accordHeadings.length;i++){

        let accordItm = document.createElement('div');
        accordItm.className = "accord-item";

        let accordItmHead = document.createElement('div');
        accordItmHead.className = "accord-heading";
        accordItmHead.textContent = accordHeadings[i];

        let accordItmPanel = document.createElement('div');
        accordItmPanel.className = "accord-panel";
        accordItmPanel.textContent = accordText[i];

        accordItm.appendChild(accordItmHead);
        accordItm.appendChild(accordItmPanel);
        accordDiv.appendChild(accordItm);
    }
    position.appendChild(accordDiv);
}
function generateDdl(){
    const position = document.querySelector('.subj-pos');
    const optVal = ['pricing', 'content', 'other'];
    const optTxt = ['Pricing', 'Content of program', 'Other'];
    let ddl = document.createElement('select');
    ddl.setAttribute('id', 'subject');
    ddl.setAttribute('name', 'subject');
    ddl.className = "form-select";
    let choose = document.createElement('option');
    choose.setAttribute('value', '0');
    choose.text = "Select one of the options";
    ddl.appendChild(choose);
    for(let i=0; i< optVal.length;i++ ){
        let opt = document.createElement('option');
        opt.setAttribute('value', optVal[i]);
        opt.text = optTxt[i];
        ddl.appendChild(opt);
    }
    position.insertBefore(ddl, position.lastElementChild)
}
function generateSocials(){
    const position =  document.querySelector('.soc-position');
    const socHref = ["https://www.instagram.com/","https://www.facebook.com/Meta/","https://x.com/?lang=en","https://www.linkedin.com/login"];
    const iconClasses = ["bi bi-instagram", "bi bi-meta", "bi bi-twitter-x", "bi bi-linkedin"];
    for(let i = 0; i < socHref.length;i++){
        let socElement = document.createElement('a');
        socElement.setAttribute('href', socHref[i]);
        socElement.setAttribute('target', '_blank');
        socElement.className = "fw-bold fs-4 text-dark mx-3 icon-link icon-link-hover";
        let socElementIcon = document.createElement('i');
        socElementIcon.className = iconClasses[i];
        socElement.appendChild(socElementIcon);
        position.appendChild(socElement);
    }
}
function generateUsfInfo(){
    const position = document.querySelector('.useful-info');
    const iconsClass = ["bi bi-telephone", "bi bi-geo-alt", "bi bi-envelope-at"];
    const infoTxt = ["(555) 987 6543", "123 Ironwood Avenue", "lm@gmail.com"];
    for(let i=0;i<iconsClass.length;i++){
        let pElem = document.createElement('p');
        pElem.className = "fs-6";

        let iElem = document.createElement('i');
        iElem.className = `${iconsClass[i]} text-dark me-2 fs-4 `;
        pElem.appendChild(iElem);

        let pElemText = document.createTextNode(infoTxt[i]);
        pElem.appendChild(pElemText);
        position.appendChild(pElem);

    }
}
function generateSlider(){
    const position = document.querySelector('.slider-position');
    for(let i=1;i<8;i++){
        let slideItem = document.createElement('div');
        slideItem.className = "slide";
        let slideItemImg = document.createElement('img');
        slideItemImg.setAttribute('src', `assets/img/pic${i}.jpg`);
        slideItemImg.setAttribute('alt', `pic${i}`);
        slideItemImg.className = "img-fluid rounded-2 shadow-lg";
        slideItem.appendChild(slideItemImg);
        position.appendChild(slideItem);
    }
}
function dynammicGeneration(){
    generateNav();
    generatePricing();
    generateStaff();
    generateReviews();
    generateAccordion();
    generateDdl();
    generateSocials();
    generateUsfInfo();
    generateSlider();
}
dynammicGeneration();

//regex section
let emailReg = /^[A-Za-z0-9\+_!#\$%&]+([\.-][A-Za-z0-9\+_!#\$%&]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*\.[A-Za-z]{2,3}$/;
let nameReg = /^([A-ZŠŽĆČĐ][a-zšžćčđ]{2,20})(\s[A-ZŠŽĆČĐ][a-zšžćčđ]{2,20})*$/;

//newsletter validation
const nwsltrField = document.getElementById('emNews');
nwsltrField.addEventListener('blur', nwsLtrValid);
function nwsLtrValid(){
    if(emailReg.test(nwsltrField.value)){
        nwsltrField.nextElementSibling.classList.add('d-none');
        nwsltrField.nextElementSibling.textContent = "You've successfully subscribed to our newsletter. Welcome aboard!";
        nwsltrField.nextElementSibling.classList.replace('alert-danger', 'alert-success');
        nwsltrField.classList.add('border', 'border-success');
        return true;
    }else{
        nwsltrField.classList.remove('border', 'border-success');
        nwsltrField.nextElementSibling.textContent = "Wrong format, good example: username@gmail.com";
        nwsltrField.nextElementSibling.classList.replace('alert-success', 'alert-danger');
        nwsltrField.nextElementSibling.classList.remove('d-none');
        return false;
        
    }
}
const nwsltrSubmit = document.getElementById('nwsltrSub');
nwsltrSubmit.addEventListener('click', nwsLtrFinalValid);
function nwsLtrFinalValid(){
    nwsltrSubmit.setAttribute('disabled', true);
    if(nwsLtrValid()){
        nwsltrSubmit.previousElementSibling.lastElementChild.classList.remove('d-none');
        setTimeout(function(){
            nwsltrField.value = "";
            nwsltrField.classList.remove('border', 'border-success');
            nwsltrSubmit.previousElementSibling.lastElementChild.classList.add('d-none');
            nwsltrSubmit.removeAttribute('disabled');
        }, 4500)
    }else{
        nwsltrSubmit.removeAttribute('disabled');
    }
}
//main form fields validation
//1.textarea length checker 
const txtArea = document.getElementById('question');
txtArea.addEventListener('input', lenCheck);
const maxLen = 300;
function lenCheck(){
    if(txtArea.value.length >= maxLen){
        txtArea.value = txtArea.value.substring(0, maxLen);
        txtArea.nextElementSibling.textContent = maxLen - txtArea.value.length;
    }
    else{
        txtArea.nextElementSibling.textContent = maxLen - txtArea.value.length;
    }
}
function txtAreaValid(){
    if(txtArea.value.length < 50){
        txtArea.nextElementSibling.nextElementSibling.classList.remove('d-none');
        return false;
    }else{
        txtArea.nextElementSibling.nextElementSibling.classList.add('d-none');
        return true;
    }
}
//2. terms and conditions
//console.log(termsChkBox.parentElement.nextElementSibling.firstelementChild)
const termsChkBox = document.getElementById('terms');
termsChkBox.addEventListener('change', termsValid);
function termsValid(){
    if(termsChkBox.checked){
        termsChkBox.parentElement.nextElementSibling.firstElementChild.removeAttribute('disabled');
        termsChkBox.nextElementSibling.nextElementSibling.classList.add('d-none');
    }else{
        termsChkBox.parentElement.nextElementSibling.firstElementChild.setAttribute('disabled', true);
        termsChkBox.nextElementSibling.nextElementSibling.classList.remove('d-none');
    }
}
//3. gender radio buttons
const genderRadio = document.getElementsByName('gender');
for (let i=0;i<genderRadio.length;i++){
    genderRadio[i].addEventListener('change', genderRadioValid);
}
function genderRadioValid(){
    for (let i=0;i<genderRadio.length;i++){
        if(genderRadio[i].checked){
            document.getElementById('genderMsg').classList.add('d-none');
            return true;
        }
    }
    document.getElementById('genderMsg').classList.remove('d-none');
    return false;
}
//4. select ddl validation
const ddlSelect = document.getElementById('subject');
ddlSelect.addEventListener('change', ddlSelectValid);
function ddlSelectValid(){
    if(ddlSelect.selectedIndex != 0){
        ddlSelect.nextElementSibling.classList.add('d-none');
        return true;
    }else{
        ddlSelect.nextElementSibling.classList.remove('d-none');
        return false;
    }
}
//5. name validation
const nameField = document.getElementById('name');
nameField.addEventListener('blur', nameFieldValid);
function nameFieldValid(){
    if(nameReg.test(nameField.value)){
        nameField.nextElementSibling.classList.add('d-none');
        return true;
    }else{
        nameField.nextElementSibling.classList.remove('d-none');
        return false;
    }
}
//6. email validation
const emailField = document.getElementById('email');
emailField.addEventListener('blur', emailFieldValid);
function emailFieldValid(){
    if(emailReg.test(emailField.value)){
        emailField.nextElementSibling.classList.add('d-none');
        return true;
    }else{
        emailField.nextElementSibling.classList.remove('d-none');
        return false;
    }

}
//7. submit button validation and last checks
function resetValues(){
    nameField.value="";
    emailField.value="";
    ddlSelect.selectedIndex = 0;
    termsChkBox.checked = false;
    termsChkBox.nextElementSibling.nextElementSibling.classList.remove('d-none');
    txtArea.value = "";
    txtArea.nextElementSibling.textContent="";
    for(let i=0;i<genderRadio.length;i++){
        genderRadio[i].checked = false;
    }
    feedback.classList.add('d-none');
    addBorders();
}
const feedback = document.getElementById('finalFeedback');
function validation(){
    let emailFlag = emailFieldValid();
    let nameFlag = nameFieldValid();
    let ddlFlag = ddlSelectValid();
    let genderFlag = genderRadioValid();
    let txtAreaFlag = txtAreaValid();
    if(!emailFlag || !nameFlag || !ddlFlag || !genderFlag || !txtAreaFlag){
        return false;
    }else{
        console.log('submit se izvrsio');
        feedback.classList.remove('d-none');
        document.getElementById('sub').setAttribute('disabled', true);
        setTimeout(resetValues, 4500);
        return false
    }
}
function addBorders(){
    $("#mainForm input[type='text']").addClass("border border-danger");
}
//jquery

$(document).ready(function(){
    //zebra effect on sections
    $('section:odd').addClass('bg-light');
    //borders on input text fields
    addBorders();
    //border removal on focus
    $("#mainForm input[type='text']").on('focus', function(){
        $(this).removeClass('border border-danger');
    });
    //read more trainers section
    $('.rdMore').click(function(){
        let button = $(this);
        button.prop('disabled', true);//disableujemo dugme tokom izvrsavanja animacije
        button.next().stop(true, true).slideToggle(400, function(){
            button.prop('disabled', false);//nakon izvrsavanja ponovo enableujemo dugme
            if (button.next().is(':visible')) {
                button.val('Read Less');  //menjamo tekst dugmeta kad je rm visible
            } else {
                button.val('Read More');  // menjamo tekst dugmeta kad rm nije visible
            }
        });
    });
    //back to top button visibility
    $('#backToTop').hide();
    $(window).scroll(function(){
        let top = $(this)[0].scrollY;
        if(top > 700 && $(window).width() > 767){
            $('#backToTop').fadeIn();
        }else{
            $('#backToTop').fadeOut();
        }
    });
    //back to top function
    $('#backToTop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 50);
    });

    //newsletter hide and show
    $('.nwsltr').next().hide();
    $('.nwsltr').click(function(){
        $(this).fadeOut(600).next().fadeIn(600);

    });

    //image slider
    let currentIndex = 0;
    const slides = $(".slider-images .slide");
    const totalSlides = slides.length;
    $('.slider-images .slide').hide();
    $(slides[currentIndex]).show();
    $("#next").click(nextSlide);
        
    $("#prev").click(previousSlide);
    function previousSlide(){
        $(slides[currentIndex]).hide();
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        $(slides[currentIndex]).fadeIn();
    }
    function nextSlide(){
        $(slides[currentIndex]).hide();
        currentIndex = (currentIndex + 1) % totalSlides;
        $(slides[currentIndex]).fadeIn();
    }
    setInterval(nextSlide, 7000);
    //accordion plugin
    $(".accord").accord({independentPanels:!1});
});