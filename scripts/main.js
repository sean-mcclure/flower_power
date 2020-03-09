function fetch_random_iris(call_function) {
    params = {}
    az.call_api({
        "url": "http://localhost:9090/get_random_flower",
        "parameters": params,
        "done": call_function,
        "fail" : "alert('not connected to server')"
    })
    az.animate_element("show_button", 1, {
        "type": "spin",
        "iterations": 1,
        "speed": 700
    })
}

function show_fetched_results(data) {
    az.animate_element('show_iris', 1, {
        "type": "spin"
    })
    az.remove_element("iris_image", 1)
    az.add_image("training_layout_cells", 1, {
        "this_class": "iris_image",
        "image_path": data['url']
    })
    az.style_image("iris_image", 1, {
        "align": "center",
        "width": "315px",
        "height": "315px",
        "border": "1px solid black",
        "border-radius": "4px"
    })
    az.remove_element("flower_title", 1)
    az.add_text("training_layout_cells", 1, {
        "this_class": "flower_title",
        "text": "Iris " + data['name'],
    })
    az.style_text("flower_title", 1, {
        "align": "center",
        "color": "yellow",
        "font-weight": "bold",
        "font-size": "20px"
    })
    barchart_wrapper_args = {
        "data": data.data,
        "right_margin": 400,
        "bar_color": "yellow"
    }
    az.remove_element("barchart", 1)
    az.add_d3_visual('training_layout_cells', 2, {
        "this_class": "barchart",
        "html_path": "d3_visuals/barchart.html",
        "wrapper_arguments": barchart_wrapper_args
    })
    az.style_d3_visual('barchart', 1, {
        "width": "90%",
        "height": "100%",
        "margin-top": "250px",
        "margin-left": "-40px"
    })
    az.rotate_element('barchart', 1, '45')
}

function show_fetched_results_2(data) {
    az.animate_element('show_iris_2', 1, {
        "type": "spin"
    })
    az.remove_element("iris_image_2", 1)
    az.add_image("challenge_layout_cells", 1, {
        "this_class": "iris_image_2",
        "image_path": data['url']
    })
    az.style_image("iris_image_2", 1, {
        "align": "center",
        "width": "315px",
        "height": "315px",
        "border": "1px solid black",
        "border-radius": "4px"
    })
    barchart_wrapper_args_2 = {
        "data": data.data,
        "right_margin": 600,
        "bar_color": "#2ff72f"
    }
    az.remove_element("barchart_2", 1)
    az.add_d3_visual('challenge_layout_cells', 2, {
        "this_class": "barchart_2",
        "html_path": "d3_visuals/barchart.html",
        "wrapper_arguments": barchart_wrapper_args_2
    })
    az.style_d3_visual('barchart_2', 1, {
        "width": "100%",
        "height": "100%",
        "margin-top": "130px",
        "margin-left": "-20px"
    })
    az.rotate_element('barchart_2', 1, '45')
    az.store_data('ask_button', 1, {
        "key": "stored_name",
        "value": data.name
    })
    az.store_data('ask_button', 1, {
        "key": "stored_iris",
        "value": JSON.stringify(data.data)
    })
}

function set_events_none() {
    az.style_button('guess_drop', 1, {
        "pointer-events": "none",
        "opacity": 0.5
    })
    az.style_button('ask_button', 1, {
        "pointer-events": "none",
        "opacity": 0.5
    })
    az.style_button('show_button_2', 1, {
        "pointer-events": "none",
        "opacity": 0.5
    })
}

function ask_machine() {
    fetched_iris = az.fetch_data('ask_button', 1, {
        "key": "stored_iris"
    })
    params = {
        "guess_string": "[" + JSON.parse(fetched_iris).values + "]"
    }
    az.call_api({
        "url": "http://localhost:9090/predict_flower",
        "parameters": params,
        "done": function(data) {
                az.all_remove_element('report_text_2')
                az.add_text('report_layout_cells', 2, {
                    "this_class" : "report_text_2",
                    "text" : data
                })
                az.style_text('report_text_2', 1, {
                    "color" : "yellow",
                    "align" : "center",
                    "text-transform" : "capitalize"
                })
                }
    })
}

az.hold_value.user_score = 0
az.hold_value.machine_score = 0
function calculate_score() {
    user_guess = az.grab_value('report_text_1', 1).toLowerCase()
    machine_guess = az.grab_value('report_text_2', 1).toLowerCase()
    actual_guess = az.grab_value('report_text_3', 1).toLowerCase()
    if (user_guess == actual_guess) {
        az.hold_value.user_score++
    }
    if (machine_guess == actual_guess) {
        az.hold_value.machine_score++
    }
    barchart_wrapper_args_3 = {
        "data": {
            keys: ["MACHINE", "HUMAN"],
            values: [az.hold_value.machine_score, az.hold_value.user_score]
        },
        "right_margin": 300,
        "bar_color": "yellow"
    }
    az.remove_element("barchart_3", 1)
    az.add_d3_visual('my_sections', 4, {
        "this_class": "barchart_3",
        "html_path": "d3_visuals/barchart.html",
        "wrapper_arguments": barchart_wrapper_args_3
    })
    az.style_d3_visual('barchart_3', 1, {
        "width": "90%",
        "height": "100%",
        "margin-top": "90px",
        "margin-left": "10px"
    })
}

function reset_options() {
    az.delay_event({
        "delay": 2000,
        "function": function() {
        az.choose_from_dropdown('guess_drop', 1, {
            "option": "MAKE A GUESS..."
        })
        az.remove_element('report_text', 1)
        az.remove_element('report_text_2', 1)
        az.remove_element('report_text_3', 1)
        set_events_none()
        }
    })
}