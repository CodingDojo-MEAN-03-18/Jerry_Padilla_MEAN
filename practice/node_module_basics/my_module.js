module.exports = function(){
     return {
          greet: function(){
               console.log('We are now using a module');
          },
          random: function(){
               const num = Math.floor(Math.random()*10);
               console.log(num);
          }
     }
}
