class Message{
    constructor(text = '',created = Date.now()){
        this.text = text;
        this.created =created;
    }
    toString(){
        return 'message to string....1';
    }
}

class ImageMessage extends Message{
    constructor(text = '', created = Date.now(), url = 'asdsad', thumbnail = ''){
        super(text, created);
        this.url = url;
        this.thumbnail = thumbnail;
    }
    toString(){
        return super.toString();
    }
}

var emptyMessage = new Message();
var textMessage = new Message('teste...', Date.now()-86400);
var photoMessage = new ImageMessage();

//console.log(emptyMessage.toString());
//console.log(textMessage);
console.log(photoMessage.toString());