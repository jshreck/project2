var db = require("../models");

module.exports = function(app) {
    //for login page
    app.get("/", (req, res) => {
        res.render("index");
    });

    //welcome page
    app.get("/welcome", (req, res) => {
        res.render("blogSpace");
    });

    //manage pg -> only visible if logged in
    app.get("/create", (req, res) => {
        res.render("createBlog");
    });

    //for handlebars templates... id is name of the file, ex: template0
    app.get("/template/:id", (req, res) => {
      
        template = "template" + req.params.id;

        //just using for example
        var hbsObj = {
            blogPost: [{
                title: "Example",

                body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, ipsa voluptas delectus sed assumenda voluptates, ab adipisci perspiciatis earum magnam fugit quasi culpa repellendus totam in, unde neque sapiente quod praesentium nisi rerum enim laudantium aliquam. Dolore nobis quis, quas quam reiciendis. Nisi, minus quo accusamus. Perferendis tempore ducimus blanditiis quo error, nemo temporibus aperiam harum vero asperiores vitae magnam et dolores repudiandae exercitationem voluptatibus veniam rerum voluptas architecto alias culpa dolorem incidunt quasi fuga. Fugit amet totam modi, optio a quae architecto odio, officia ipsam, autem dolore dignissimos. Possimus impedit incidunt, pariatur facere natus distinctio nulla ut, reiciendis alias debitis quisquam et corporis asperiores ratione eligendi quas aspernatur voluptate excepturi aperiam accusantium fuga ea tempora. Maxime adipisci in modi error dolorum excepturi ad eaque amet molestias consequatur dolore, dignissimos deleniti sint perferendis vero at obcaecati itaque ipsum totam officiis, eligendi fugit labore a odit. Temporibus sunt quia sit, quasi, deserunt quo eveniet adipisci impedit autem voluptatibus illum delectus placeat alias facilis beatae quas, minima nisi recusandae nam necessitatibus itaque harum culpa aperiam quis. Ipsam explicabo eligendi quas quasi, aliquam, vero commodi voluptatibus dicta assumenda quam accusamus, nihil, ducimus ipsum expedita sed nemo est cumque ipsa. Magni ipsam reprehenderit sint voluptate accusamus praesentium, architecto eaque quas a vel explicabo veniam. Labore quod ea reiciendis accusamus, iure illum. Illum reiciendis repudiandae possimus, asperiores quasi in consectetur consequuntur placeat labore unde beatae quidem modi laudantium perspiciatis quaerat, molestiae incidunt nostrum! Aliquid, voluptatum harum. Delectus alias reprehenderit porro voluptatem eos aut beatae expedita ullam inventore quaerat, tenetur ad nostrum numquam explicabo aperiam laudantium dolores, neque vero repudiandae suscipit. Cumque quasi nobis sequi doloribus, accusamus omnis veritatis vitae asperiores, quisquam inventore voluptatibus odit optio libero atque voluptatem error laudantium, velit quae, tempore ex vero perferendis quia eius. Doloremque, eius sit quod quasi amet fugiat porro nobis? Iste numquam molestiae est inventore culpa, odit voluptas voluptatibus pariatur. Iusto veritatis eveniet, enim saepe cumque id reiciendis pariatur, voluptatibus dignissimos praesentium totam delectus numquam sit optio, accusamus accusantium quia est consequuntur! Animi nostrum odit beatae voluptatum, porro! Commodi reprehenderit mollitia quisquam a eos voluptas nihil iste. Atque, ex nihil quia, nesciunt laboriosam aliquid soluta perferendis quisquam quaerat facilis alias quod ipsum veritatis libero sit velit accusamus quibusdam ipsam sint quam perspiciatis culpa, corporis voluptatem ad. Ipsam recusandae, laborum quo porro laboriosam ducimus, quaerat veniam eum reiciendis incidunt! Accusamus pariatur provident earum voluptatum, sapiente ipsum accusantium fuga quo deserunt a at corporis vel quidem libero molestiae laudantium neque magnam asperiores ipsa iste dolore soluta velit fugit, ea! Atque, illum placeat at et tempore ad harum repellat eum iure. Consectetur laboriosam debitis provident mollitia! Debitis cumque perferendis, pariatur quia ipsa voluptates, dignissimos. Et amet repellendus beatae voluptatum cumque assumenda enim modi iste, vero aliquid tempore quia doloremque explicabo dolores. Dolorem expedita itaque aut hic voluptate asperiores. Accusamus hic repudiandae ratione distinctio ullam corrupti officiis excepturi possimus consequuntur voluptas amet cupiditate atque aperiam nesciunt iste similique ab dolores quaerat mollitia, ducimus temporibus facere dolore a ipsa? Reiciendis rerum asperiores labore."
            }, {
                title: "Example2",
                body: "blah2blah2blah2"

            }]
        }
        res.render(template, hbsObj);
    });


    //to get a user's blog (for now using userID)
    app.get("/blogs/:userID", (req, res) => {
        var userID = req.params.userID
        var template;
        var hbsObj;

        console.log(typeof userID);
        //get user's chosen template
        db.User.findOne({
            where: {
                id: userID
            }
        }).then((user) => {
            console.log(user.name)
            var template = "template" + User.template;
        //get user's blog posts
        }).then(() => {
            db.BlogPost.findAll({
                where: {
                    userId: userID
                }
            }).then((Posts) => {
                var hbsObj = {
                    blogPost: Posts
                }
            });
        //render blog posts in chosen template
        }).then(() => {
            res.render(template, hbsObj);
        });
    });
};

