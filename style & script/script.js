// (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)

// invalid email check

const email = document.getElementById('email')
const invalidText = document.getElementById('invalid-text')

const emailCheck = () => {

    if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        if (email.value === '') {
            invalidText.innerText = `Subscribe to stay updated!`
            return false
        }
        email.classList.add('invalid-style')
        email.style.border = '1px solid hsl(4, 100%, 67%)'
        invalidText.style.display = 'block'
        return false
    }

    email.classList.remove('invalid-style')
    email.style.border = '1px solid #90EE90'
    invalidText.style.display = 'none'
    return true
}

// on submit 

const formSection = document.querySelector('.form-section')
const primaryImg = document.querySelector('.primary-img')
const userEmail = document.querySelector('#user-email')
const onSuccess = document.querySelector('.on-success')
const submit = document.getElementById('submit')
const dismiss = document.getElementById('dismiss')


submit.addEventListener('click', () => {
    if (email.value.match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))) {
        // displaying success page
        onSuccess.style.display = 'block'
        // hiding primary content
        primaryImg.style.display = 'none'
        formSection.style.display = 'none'

        // user-email - 
        userEmail.innerText = email.value
        return true
    }

    email.classList.add('invalid-style')
    email.style.border = '1px solid hsl(4, 100%, 67%)'
    invalidText.style.display = 'block'
    return false

})

dismiss.addEventListener('click', () => {
    // refreshing the page
    window.location.reload()
    // setting inpput field empty
    email.value = ''
})