console.log(sessionStorage.loggedIn);

$(document).ready(() => {

    //delete blogPost
    $(document).on("click", ".delete", (clicked) => {

        event.preventDefault();

        var postID = $(clicked.currentTarget).data("postid");

        console.log("postID " + postID);

        $.ajax({
            url:`/api/delete/${postID}`,
            type: "DELETE",
        }).then((response) => {
            console.log(response);

            $(`#${postID}`).remove();

        });

    });
});

// $("#edit").on("click", function () {

//     event.preventDefault();
// //edit blogPost
// });

