/*-------------------------------------------------------------------------------------------------------------------------------------------------------*
*       01. SASS files  (to create "bundle.scss")                                                                                                                      *
*--------------------------------------------------------------------------------------------------------------------------------------------------------*/
        import "../scss/import.scss";



/*-------------------------------------------------------------------------------------------------------------------------------------------------------*
*      02. Javascript files (to create "bundle.scss")                                                                                                                 *
*--------------------------------------------------------------------------------------------------------------------------------------------------------*/
        //import "bootstrap.js", "jquery.js", "popper.js" files from installed location (node_modules)
        //just import bootstrap here and webpack will automatically import "jquery" and "popper.js" for us cause webpack will know that bootstrap need those two dependencies
        import "bootstrap";
        //import main jquery file
        import "./main/main";

        


/*-------------------------------------------------------------------------------------------------------------------------------------------------------*
*                  02. image files                                                                                                                       *
*--------------------------------------------------------------------------------------------------------------------------------------------------------*/
        //import image files here to move from src/img to docs/img to use in index.html in <img> tags 
        //(if image files are used in .scss files as background url() then no need to import here the scss loaders in webpack.config.js file will do the job)

        //import favicon image
        import '../img/favicon/favicon-16x16.png';

        //import logo png
        import '../img/logo/logo.png';

        //import portfolio section item images
        import '../img/portfolio/portfolio-item-1.jpg';
        import '../img/portfolio/portfolio-item-2.jpg';
        import '../img/portfolio/portfolio-item-3.jpg';
        import '../img/portfolio/portfolio-item-4.jpg';
        import '../img/portfolio/portfolio-item-5.jpg';
        import '../img/portfolio/portfolio-item-6.jpg';
        import '../img/portfolio/portfolio-item-7.jpg';
        import '../img/portfolio/portfolio-item-8.jpg';
        import '../img/portfolio/portfolio-item-9.jpg';

        //import testimonials section client images
        import '../img/testimonials/client-1.jpg';
        import '../img/testimonials/client-2.jpg';
        import '../img/testimonials/client-3.jpg';
        import '../img/testimonials/client-4.jpg';
        import '../img/testimonials/client-5.jpg';
        import '../img/testimonials/client-6.jpg';
        import '../img/testimonials/client-7.jpg';
        
        //import blog section images
        import '../img/blog/blog-post-1.jpg';
        import '../img/blog/blog-post-2.jpg';
        import '../img/blog/blog-post-3.jpg';



