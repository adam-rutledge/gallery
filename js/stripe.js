<script>
    var handler = StripeCheckout.configure({
      key: 'pk_test_C387opaZCGYru4uaKfthZATA',
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: function(token) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
      }
    });

    document.getElementById('customButton').addEventListener('click', function(e) {
      // Open Checkout with further options:
      handler.open({
        name: 'CENTERFOLD',
        description: '2 widgets',
        currency: 'cad',
        amount: 2000
      });
      e.preventDefault();
    });

    // Close Checkout on page navigation:
    window.addEventListener('popstate', function() {
      handler.close();
    });
</script>