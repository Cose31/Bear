exports.seed = function (knex, Promise) {
    return knex("community_section")
        .del()
        .then(function () {
            return knex("community_section").insert([
                {
                    "section_name": "engaging discussion",
                    "description": "like most things on the internet, reading this is totally a great use of your time...",
                },
            ]);
        });
};