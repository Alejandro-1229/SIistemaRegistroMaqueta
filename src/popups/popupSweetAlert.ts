import swal, { SweetAlertIcon } from "sweetalert2";

export const popupSweetAlert = (title_popup:string, message_popup:string, icon_popup:SweetAlertIcon) => {
    swal.fire({
        title: title_popup,
        text: message_popup,
        icon: icon_popup
    });
}
