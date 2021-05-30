# React Alert CSS Backend

<div>
   <img alt="Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"/>
   <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
  <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
  <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
</div>
&nbsp;

This is a RESTful API build for [React Alert CSS Frontend](https://github.com/theFl00f/react-alert-css) deployed to Heroku that allows a user to Create and Read alert designs on [React Alert CSS](https://react-alert-css.netlify.app).

### Postman

To easily test the responses from the API, check out this neat Postman publication, which contains a simple sample API call for each endpoint. It can generate code for the API call in most languages.

<a href="https://documenter.getpostman.com/view/14555787/TzXzEHiH">
   <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=red" />
</a>

### Schema
The type definition of an `Alert` is defined in `/routes/alerts.js` as a Mongoose Schema.

<details>
   <summary>See inside for reference</summary>   
      
```node
const alert: Alert = {
    user: String,
    alertName: String,
    textValues: {
      message: String,
      button: String,
    },
    css: {
      alertBorderColor: String,
      alertBackgroundColor: String,
      buttonBorderColor: String,
      buttonBackgroundColor: String,
      textColor: String,
      buttonTextColor: String,
    },
    dimensions: {
      alertWidth: Number,
      alertHeight: Number,
      alertBorderRadius: Number,
      alertBorderWidth: Number,
      alertXPadding: Number,
      alertYPadding: Number,
      buttonXPadding: Number,
      buttonYPadding: Number,
      buttonBorderRadius: Number,
      buttonBorderWidth: Number,
    },
  },
  { timestamps: { createdAt: "created_at" } }
}
```
      
</details>

### Endpoints

| URL Endpoint | Method | Parameters | Return value 
|---|---|---|---|
|[/api/alerts](https://react-alert-css-backend.herokuapp.com/api/alerts)|Get Many| | `Alert[]` |
|[/api/alert/:id](http://react-alert-css-backend.herokuapp.com/api/alert/60a5c40242ede7a712edacc6)|Get One| | `Alert` |
|[/api/alert](https://react-alert-css-backend.herokuapp.com/api/alert) Invalid link without body data|Add One| See below table | `Alert` |

<details>
   <summary>View JSON input for Add One Alert</summary>
   
   ```json
   {
      "textValues": {
         "message": "",
         "button": "Close"
      },
      "css": {
         "alertBorderColor": "#181069",
         "alertBackgroundColor": "#3c1069",
         "buttonBorderColor": "#4d1069",
         "buttonBackgroundColor": "#5f1069",
         "textColor": "#ffffff",
         "buttonTextColor": "#ffffff"
      },
      "dimensions": {
         "alertWidth": 24,
         "alertHeight": 14,
         "alertBorderRadius": 0,
         "alertBorderWidth": 0.5,
         "alertXPadding": 1,
         "alertYPadding": 1,
         "buttonXPadding": 4,
         "buttonYPadding": 0,
         "buttonBorderRadius": 10,
         "buttonBorderWidth": 0.5
      },
      "user": "Anonymous",
      "alertName": "Untitled"
   }
```

</details>
