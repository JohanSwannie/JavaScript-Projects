    let qData;
    let latestQuote = '';
    let latestAuthor = '';

    function quotesGeneration() {
      return $.ajax({
        headers: {
          Accept: 'application/json'
        },
        url: 'https://gist.githubusercontent.com/JohanSwannie/fe050d8d83281af69c3bdacdd9ffa0ab/raw/da124f8ad7a846932500c5e2a461c185230dd2d0/jswan-quotes.json',
        success: function(quotesList) {
          if (typeof quotesList === 'string') {
            qData = JSON.parse(quotesList);
          }
        }
      });
    }

    function getRandomQuote() {
      return qData.quotes[
        Math.floor(Math.random() * qData.quotes.length)
      ];
    }

    function obtainQuote() {
      let randomQuote = getRandomQuote();
      latestQuote = randomQuote.quote;
      latestAuthor = randomQuote.author;
      $('#tweet-quote').attr(
        'href',
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
        encodeURIComponent('"' + latestQuote + '" ' + latestAuthor)
      );
      $('.qTxt').animate({
        opacity: 0
      }, 500, function() {
        $(this).animate({
          opacity: 1
        }, 500);
        $('#text').text(randomQuote.quote);
      });
      $('.qAuth').animate({
        opacity: 0
      }, 700, function() {
        $(this).animate({
          opacity: 1
        }, 700);
        $('#author').html(randomQuote.author);
      });
      let colorWheel = ['#FFFF00', '#00FF00', '#FF00FF', '#51e2f5', '#e74c3c']
      let color = Math.floor(Math.random() * colorWheel.length);
      $('html body').animate({
          backgroundColor: colorWheel[color]
        },
        1500
      );
      $('#quote-box').animate({
      backgroundColor: colorWheel[color]
        },
        1500
      );
    }

    $(document).ready(function() {
      quotesGeneration().then(() => {
        obtainQuote();
      });

      $('#new-quote').on('click', obtainQuote);
    });
  
