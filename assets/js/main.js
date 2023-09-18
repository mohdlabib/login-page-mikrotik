class URLParameterParser {
  constructor() {
    
    this.url = window.location.href;
    
    this.indexOfQuestionMark = this.url.indexOf("?");
    this.params = {};

    if (this.indexOfQuestionMark !== -1) {
      
      this.paramString = this.url.substring(this.indexOfQuestionMark + 1);

      
      this.paramArray = this.paramString.split("&");

      
      this.paramObj = {};

      
      for (let i = 0; i < this.paramArray.length; i++) {
        const param = this.paramArray[i].split("=");
        if (param.length === 2) {
          const key = decodeURIComponent(param[0]);
          const value = decodeURIComponent(param[1]);
          this.paramObj[key] = value;
        }
      }

      this.params = this.paramObj;
    }
  }

  getParameter(parameterName) {
    
    return this.params[parameterName] || null;
  }
}

function addRowIfDesktop() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth > 600) {
    
    const newRow = document.querySelector('#addRow');
    newRow.classList.add('row'); 
  } else {
    const newRow = document.querySelector('#addRow');
    newRow.classList.remove('row'); 
  }
}