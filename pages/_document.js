import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/assets/images/logo2.png" type="image/x-icon" />
        <link rel="stylesheet" href="/assets/web/assets/mobirise-icons/mobirise-icons.css" />
        <link rel="stylesheet" href="/assets/tether/tether.min.css" />
        <link rel="stylesheet" href="/assets/soundcloud-plugin/style.css" />
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap-grid.min.css" />
        <link rel="stylesheet" href="/assets/bootstrap/css/bootstrap-reboot.min.css" />
        <link rel="stylesheet" href="/assets/socicon/css/styles.css" />
        <link rel="stylesheet" href="/assets/dropdown/css/style.css" />
        <link rel="stylesheet" href=" https://cdn.datatables.net/1.11.5/css/dataTables.bootstrap4.min.css" />
       
       
        <link rel="stylesheet" href="/assets/theme/css/style.css" />
        <link rel="stylesheet" href="/assets/mobirise/css/mbr-additional.css" type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
     
        <script src="/assets/web/assets/jquery/jquery.min.js"></script>
      
        <script src="/assets/popper/popper.min.js"></script>
        <script src="/assets/tether/tether.min.js"></script>
        <script src="/assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="/assets/mbr-clients-slider/mbr-clients-slider.js"></script>
     
        <script src="/assets/smoothscroll/smooth-scroll.js"></script>
        <script src="/assets/touch-swipe/jquery.touch-swipe.min.js"></script>
        <script src="/assets/parallax/jarallax.min.js"></script>
        <script src="/assets/viewportchecker/jquery.viewportchecker.js"></script>
        <script src="/assets/bootstrapcarouselswipe/bootstrap-carousel-swipe.js"></script>
        
        <script src="/assets/dropdown/js/script.min.js"></script>
        <script src="/assets/theme/js/script.js"></script>
      
        <script src="/assets/formoid/formoid.min.js"></script> 
    
        <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script> 
        <script src="https://cdn.datatables.net/1.11.5/js/dataTables.bootstrap4.min.js"></script>
     
        
        </body>
      </Html>
    );
  }
}

export default MyDocument;