$(document).ready(function () {

    function caesarCipher(gotValues) {
        
        const message = gotValues[0];
        const key_ = gotValues[1];

       if (message.length <= 0 || isNaN(key_)) {
        alert('El campo de "Mensaje" está vacio ó el campo de "Clave" tiene caracteres no validos".');
        console.log('Hi');
       } else {
            const key = gotValues[1] % 26;
            let completeWord = '';

            for (const letter of message) {

                let currentIndex = alphabet.indexOf(letter);

                const isNumberInArray = alphabet.includes(letter)

                if (isNumberInArray) {
                    if (method === 'encrypt') {
                        completeWord += alphabet[currentIndex + key];
                    } else {
                        completeWord += alphabet[currentIndex - key];
                    };                
                } else {
                    completeWord += letter;
                };

            };

            $('.result').val(completeWord);

       };

    };


  
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let method = '';

    $('.encrypt').click(function (e) {
        e.preventDefault();
        let messageValue = $('.message').val().toLowerCase();
        let keyValue = parseInt($('.key').val());
        const messageAndKeyValues = [messageValue, keyValue];
        method = 'encrypt';
        console.log(messageAndKeyValues)
        caesarCipher(messageAndKeyValues);
    });


    $('.decrypt').click(function (e) {
        e.preventDefault();
        let messageValue = $('.message').val().toLowerCase();
        let keyValue = parseInt($('.key').val());
        method = 'decrypt';
        const messageAndKeyValues = [messageValue, keyValue]
        caesarCipher(messageAndKeyValues);
    });

});