import Swal from 'sweetalert2';

export class MessageService {
    successMsg(titleM:string,msg:string){
      return Swal.fire({
        icon: 'success',
        title: titleM,
        text: msg,
      })
    }
    deleteMsg(titleM:string,msg:string){
      return Swal.fire({
        icon: 'error',
        title: titleM,
        text: msg,
      })
    }
    informationMsg(titleM:string,msg:string){
      return Swal.fire({
        icon: 'info',
        title: titleM,
        text: msg,
        timer: 2000
      })
    }
    errorMsg(titleM:string,msg:string){
      return Swal.fire({
        icon: 'error',
        title: titleM,
        text: msg,
        timer: 2000
      })
    }

    // autoCloseMsg(titleM:string,msg:string){
    //   let timerInterval
    //   let x
    //   return Swal.fire({
    //     title: titleM,
    //     html: msg,
    //     timer: 3000,
    //     timerProgressBar: true,
    //     didOpen: () => {
    //       Swal.showLoading()
    //       timerInterval = setInterval(() => {
    //         const content = Swal.getContent()
    //         if (content) {
    //           const b = content.querySelector('b')
    //           if (b) {
    //             x = this.ConvertStringToNumber(b.textContent)
    //             x = Swal.getTimerLeft()
    //           }
    //         }
    //       }, 100)
    //     },
    //     willClose: () => {
    //       clearInterval(timerInterval)
    //     }
    //   }).then((result) => {
    //     /* Read more about handling dismissals below */
    //     if (result.dismiss === Swal.DismissReason.timer) {
    //       console.log('I was closed by the timer')
    //     }
    //   })
    // }
    
    ConvertStringToNumber(input: string) {
      var numeric = Number(input);
      return numeric;
  }

  }