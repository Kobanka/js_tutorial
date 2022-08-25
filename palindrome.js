// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
  }
  
//Defines a Phrase Object
function Phrase(content){
    this.content = content;

    //Processes a string into LowerCase.
    this.processor = function(string){
        return string.toLowerCase();
    }

    //Return content processed by palindrome testing.
    this.processedContent = function processedContent(){
        return this.processor(this.content);
    }

    // Returns true if the phrase is a palindrome, false otherwise.
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    }
}

// //Defines a TranslatedPhrase object.
// function TranslatedPhrase(content,translation){
//     this.content = content;

//     this.translation = translation;

//     // Returns translation processed for palindrome testing.
//     this.processedContent = function processedContent() {
//         return this.processor(this.translation); 
//     }

// }

// TranslatedPhrase.prototype = new Phrase();