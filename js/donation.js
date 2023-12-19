/**JavaScript for handling the thank-you card**/

    document.addEventListener('DOMContentLoaded', function() {
        var thankYouCard = document.getElementById('thankYouCard');
        var donateButton = document.getElementById('donateButton');

        donateButton.addEventListener('click', function() {
            thankYouCard.style.display = 'block';

            // Close the card after a delay (e.g., 3 seconds)
            setTimeout(function() {
                thankYouCard.style.display = 'none';
            }, 3000);
        });
    });


    /** JavaScript for handling the QR code modal **/

    document.addEventListener('DOMContentLoaded', function() {
        var qrCodeModalContainer = document.getElementById('qrCodeModal');
        var mobilePayQRCodeModalContainer = document.getElementById('mobilePayQRCodeModal');

        // Placeholder text for demonstration purposes
        var placeholderText = 'Scan QR Code';

        // Generate QR code inside the modal using qrcode.js library
        var qrModal = new QRCode(mobilePayQRCodeModalContainer, {
            text: placeholderText,
            width: 200,  // Adjust the width as needed
            height: 200,  // Adjust the height as needed
        });

        // Function to show the QR code modal
        window.showQRCodeModal = function() {
            qrCodeModalContainer.style.display = 'flex'; // Use flex for centering
        };

        // Function to hide the QR code modal
        window.hideQRCodeModal = function() {
            qrCodeModalContainer.style.display = 'none';
        };

        // Close the modal when clicking anywhere else on the screen
        document.addEventListener('click', function(event) {
            if (event.target === qrCodeModalContainer) {
                hideQRCodeModal();
            }
        });
    });
