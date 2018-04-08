
// Initialise global variables
let currentPeriod = "2016JJ00";
let currentAge = "11700";
let currentGender = "3000";
let currentOrigin = "6030";
let currentMaleResults = [];
let currentFemaleResults = [];
let periodMaleResults = [];
let periodFemaleResults = [];

// Initialise charts object
let charts = {};
charts.crime = {};
charts.offence = {};
charts.lineGraph = {};

$(document).ready(function () {
    initialiseData(function () {
        // build the charts
        initialiseCharts();

        // put data inside charts
        getData();

        // function to toggle the year widget
        let yearChangeButton = $('.year-change-button');
        yearChangeButton.isToggled = false;
        $('#year-button-list').hide();

        yearChangeButton.click(function () {
            yearChangeButton.isToggled = !yearChangeButton.isToggled;

            if (yearChangeButton.isToggled) {
                $('#year-button-list').fadeIn(100);
            } else {
                $('#year-button-list').fadeOut(100);
            }
        });

        // setting click function for all year buttons
        $('.year-button').each(function (i, obj) {
            // get year number from year key 
            let year = obj.id.substr(obj.id.length - 4)

            $(obj).click(function () {
                // set current period key
                currentPeriod = year + "JJ00"

                // fade out widget
                $('#year-button-list').fadeOut(100);
                yearChangeButton.isToggled = false;

                // update charts
                getData();
            });
        });

        // initialise scroll id variable
        let scrollID = 1

        function scroll(delta) {
            // Only change the scroll id when it's between 1 and 5
            if (scrollID + delta >= 1 && scrollID + delta <= 5) {
                scrollID += delta;
            }

            if (scrollID == 1) {
                // Fade out scroll-up button when you're at the top of the page
                $('.scrollbutton-up').fadeOut(500);
            } else {
                // Fade in the scroll-up button when you're below the top of the page
                $('.scrollbutton-up').fadeIn(500);
            }

            if (scrollID == 5) {
                // Fade out scroll-down button when you're at the bottom of the page
                $('.scrollbutton').fadeOut(500);
            } else {
                // Fade in the scroll-up button when you're above the bottom of the page
                $('.scrollbutton').fadeIn(500);
            }

            // only scroll when a valid element to scroll to exists
            if ($('#section0' + scrollID).length) {
                // Scroll to element
                $('html, body').animate({ scrollTop: $('#section0' + scrollID).offset().top }, 500, 'linear');
            }
        }

        $(function () {
            // hide scroll-up button at start
            $('.scrollbutton-up').hide();

            $('.scrollbutton').on('click', function (e) {
                // Cancel the default action (navigation) of the click.
                e.preventDefault();
                // scroll up 1 element
                scroll(1);
            });

            $('.scrollbutton-up').on('click', function (e) {
                // Cancel the default action (navigation) of the click.
                e.preventDefault();
                // scroll down 1 element
                scroll(-1);
            });

            // scroll to the top of the page, so the page resets when reloading
            $('html, body').animate({ scrollTop: $('#section01').offset().top }, 500, 'linear');
        });

        $(window).resize(function () {
            // dynamically adjust the page position when the window size changes
            $('html, body').animate({ scrollTop: $('#section0' + scrollID).offset().top }, 1, 'linear');
        });
    });
});