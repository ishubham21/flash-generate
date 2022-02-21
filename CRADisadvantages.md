## Disadvantages of CRA (Create-React-App)

 * It is SLOW! CRA packs a lot of unwanted dependencies that it takes an eternity to download all of them. With CRA, getting started is a pain! 

 * It is difficult to add custom build configs - it can be achieved by ejecting CRA but it is not recommended for beginners. The other way is you can use packages like customize-cra or react-app-rewired but then they have limited capabilities.
 
 * Most of the complexity of the application is in the background components which are simply plain JavaScript (or maybe TypeScript). Therefore, it is imperative not to rely on the CRA template, or more specifically `react-scripts`. It is a good starter, however, it packs too many things than what we require, and abstracts the configurations entirely.