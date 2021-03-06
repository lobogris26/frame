export default class Frame {
  constructor(data) {
       this.data=data;
  }

  send(){    

    const form=new FormData();
    form.append('address',this.data.address);
    form.append('bedrooms',this.data.bedrooms);
    form.append('bathrooms',this.data.bathrooms);
    form.append('city',this.data.city);
    form.append('code',this.data.code);
    form.append('comments',this.data.comments);
    form.append('details',this.data.details);
    form.append('email',this.data.email);
    form.append('extras',this.data.extras);
    form.append('hours',this.data.hours);
    form.append('lastName',this.data.lastName);
    form.append('name',this.data.name);
    form.append('often',this.data.often);
    form.append('phone',this.data.phone);
    form.append('preferedDay',this.data.preferedDay);
    form.append('preferedTime',this.data.preferedTime);
    form.append('street',this.data.street);
    form.append('typeClean',this.data.typeClean);
      
     fetch('contact.php',{
         method:'POST',
         body:form
     }).then(res=>{
         if (res.status===200) {

          console.log(res);
          
           this.showMessage('Message has been sent already','notification-exit');
           this.clean();
         }
         else
         {
          this.showMessage('Message has not been sent','notification-error');
         }
     })
      
  }

  showMessage(message,status){
    const page=document.querySelector('body');
    const dialog=document.createElement('div');
    dialog.classList.add('notification',status);
    dialog.textContent=message;

    page.insertBefore(dialog, document.querySelector('.container'));

    setTimeout(()=>{
      dialog.classList.add('visible');

      setTimeout(()=>{
        dialog.classList.remove('visible');
        setTimeout(() => {
          dialog.remove();
     }, 500);
      },3000);
    },100);
    
  }

  clean(){
    const fields=document.querySelectorAll('input,textarea,select');
    fields.forEach(field=>{
      field.value='';
      field.classList.remove('exit');
    })
  }

}
    
   

