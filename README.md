# React Alert CSS Backend

<div>
   <img alt="Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"/>
   <img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
  <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
  <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
</div>
&nbsp;

This is a RESTful API build for [React Alert CSS Frontend](https://github.com/theFl00f/react-alert-css) deployed to Heroku that allows a user to Create and Read alert designs on [React Alert CSS](https://react-alert-css.netlify.app).
  
### Schema
The type definition of an `Alert` is defined in `/routes/alerts.js` as a Mongoose Schema, see below for reference.

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

### Endpoints

| URL Endpoint | Method | Parameters | Return value 
|---|---|---|---|
|[/api/alerts](https://react-alert-css-backend.herokuapp.com/api/alerts)|Get Many| | `Alert[]` |
|[/api/alert/:id](https://react-alert-css-backend.herokuapp.com/api/alert/)|Get One| | `Alert` |
|[/api/alert](https://react-alert-css-backend.herokuapp.com/api/alerts)|Add One| `Alert` with no timestamps | `Alert` |
