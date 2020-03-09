az.call_once_satisfied({
    "condition": "az.check_exists('my_sections', 1)",
    "function": function() {
        az.add_text('my_sections', 2, {
            "this_class": "training_title",
            "text": "TRAIN YOURSELF"
        })
        az.style_text('training_title', 1, {
            "color": "white",
            "align": "center",
            "font-size": "24px"
        })
        az.add_layout('my_sections', 2, {
            "this_class": "training_layout",
            "row_class": "training_layout_rows",
            "cell_class": "training_layout_cells",
            "number_of_rows": 1,
            "number_of_columns": 2
        })
        az.style_layout('training_layout', 1, {
            "height": "100%",
            "width": "90%",
            "align": "center",
            "table-layout": "fixed",
            "margin-top": "-30px",
            "border": 0
        })
        az.style_layout('training_layout_cells', 1, {
            "valign": "top"
        })
        az.add_button('training_layout_cells', 1, {
            "this_class": "show_iris",
            "text": "SHOW IRIS"
        })
        az.style_button('show_iris', 1, {
            "align": "center",
            "background": "white",
            "color": "black",
            "margin-top": "70px",
            "margin-bottom": "10px",
            "border": "1px solid black",
            "outline" : 0
        })
        az.add_event('show_iris', 1, {
            "type": "click",
            "function": function() {
                fetch_random_iris(function(data) {
                    show_fetched_results(data)
                })
            }
        })
    }
})