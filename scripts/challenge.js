az.call_once_satisfied({
    "condition": "az.check_exists('my_sections', 2)",
    "function": function() {
        az.add_text('my_sections', 3, {
            "this_class": "flower_title_2",
            "text": "CHALLENGE THE AI"
        })
        az.style_text('flower_title_2', 1, {
            "color": "white",
            "align": "center",
            "font-size": "24px"
        })
        az.add_layout('my_sections', 3, {
            "this_class": "challenge_layout",
            "row_class": "challenge_layout_rows",
            "cell_class": "challenge_layout_cells",
            "number_of_rows": 1,
            "number_of_columns": 4
        })
        az.style_layout('challenge_layout', 1, {
            "height": "100%",
            "width": "90%",
            "align": "center",
            "table-layout": "fixed",
            "column_widths": ['30%', '30%', '30%', '10%'],
            "border": 0
        })
        az.style_layout('challenge_layout_cells', 1, {
            "valign": "top"
        })
        az.add_text('challenge_layout_cells', 1, {
            "this_class": "step_title",
            "text": "STEP 1"
        })
        az.style_text('step_title', 1, {
            "align": "center",
            "margin-top": "20px",
            "margin-bottom": "-40px",
            "color": "yellow",
            "font-size": "24px"
        })
        az.add_button('challenge_layout_cells', 1, {
            "this_class": "show_iris_2",
            "text": "SHOW IRIS"
        })
        az.style_button('show_iris_2', 1, {
            "align": "center",
            "background": "white",
            "color": "black",
            "margin-top": "40px",
            "margin-bottom": "10px",
            "border": "1px solid darkslategrey",
            "outline" : 0
        })
        az.add_event('show_iris_2', 1, {
            "type": "click",
            "function": function() {
                fetch_random_iris('show_fetched_results_2(data)')
                az.style_dropdown("guess_drop", 1, {
                    "pointer-events": "auto",
                    "opacity": 1
                })
            }
        })
        az.add_layout('challenge_layout_cells', 3, {
            "this_class": "guess_layout",
            "row_class": "guess_layout_rows",
            "cell_class": "guess_layout_cells",
            "number_of_rows": 4,
            "number_of_columns": 1
        })
        az.style_layout('guess_layout', 1, {
            "border": 0
        })
        az.add_text('guess_layout_cells', 1, {
            "this_class": "step_title",
            "text": "STEP 2"
        })
        az.style_text('step_title', 2, {
            "align": "center",
            "margin-top": "0px",
            "margin-bottom": "-30px",
            "color": "yellow",
            "font-size": "24px"
        })
        az.add_dropdown('guess_layout_cells', 2, {
            "this_class": "guess_drop",
            "options": ['Iris Setosa', 'Iris Virginica', 'Iris Versicolor'],
            "title": 'MAKE A GUESS...'
        })
        az.add_text('guess_layout_cells', 2, {
            "this_class": "step_title",
            "text": "STEP 3"
        })
        az.style_text('step_title', 3, {
            "align": "center",
            "margin-top": "30px",
            "margin-bottom": "-30px",
            "color": "yellow",
            "font-size": "24px"
        })
        az.add_event('guess_drop', 1, {
            "type": "change",
            "function": function() {
                az.remove_element('report_text', 1)
                az.add_text('report_layout_cells', 1, {
                    "this_class": "report_text",
                    "text": az.grab_value('guess_drop', 1)
                })
                az.style_text('report_text', 1, {
                    "color": "yellow",
                    "align": "center"
                })
                az.style_button('ask_button', 1, {
                    "pointer-events": "auto",
                    "opacity": 1
                })
            }
        })
        az.add_button('guess_layout_cells', 3, {
            "this_class": "ask_button",
            "text": "ASK MACHINE"
        })
        az.style_button('ask_button', 1, {
            "background": "hotpink",
            "border": "1px solid darkslategrey"
        })
        az.add_event('ask_button', 1, {
            "type": "click",
            "function": function() {
                ask_machine();
                az.animate_element('ask_button', 1, {
                    'type': 'spin'
                })
                az.style_button('show_button_2', 1, {
                    "pointer-events": "auto",
                    "opacity": 1
                })
            }
        })
        az.add_text('guess_layout_cells', 4, {
            "this_class": "step_title",
            "text": "STEP 4"
        })
        az.style_text('step_title', 4, {
            "align": "center",
            "margin-top": "0px",
            "margin-bottom": "0px",
            "color": "yellow",
            "font-size": "24px"
        })
        az.add_button('guess_layout_cells', 4, {
            "this_class": "show_button_2",
            "text": "SHOW ACTUAL"
        })
        az.style_button("show_button_2", 1, {
            "background": "#facea8",
            "color": "black",
            "border": "1px solid darkslategrey"
        })
        az.add_event('show_button_2', 1, {
            "type": "click",
            "function": function() {
                az.animate_element('show_button_2', 1, {
                    'type': 'spin'
                })
                fetched_name = az.fetch_data('ask_button', 1, {
                    "key": "stored_name"
                })
                az.all_remove_element('report_text_3')
                az.add_text('report_layout_cells', 3, {
                    "this_class": "report_text_3",
                    "text": "iris " + fetched_name
                })
                az.style_text('report_text_3', 1, {
                    "color": "yellow",
                    "align": "center",
                    "text-transform": "capitalize"
                })
                calculate_score()
                set_events_none()
                az.scroll_to('my_sections', 4)
                reset_options()
            }
        })
        az.all_style_layout('guess_layout_cells', {
            "halign": "center"
        })
        az.add_layout('challenge_layout_cells', 4, {
            "this_class": "report_layout",
            "row_class": "report_layout_rows",
            "cell_class": "report_layout_cells",
            "number_of_rows": 3,
            "number_of_columns": 1
        })
        az.style_layout('report_layout', 1, {
            "align": "center",
            "border": 2
        })
        az.all_style_layout('report_layout_cells', {
            "border": "2px solid white"
        })
    }
})