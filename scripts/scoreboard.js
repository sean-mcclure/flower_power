az.call_once_satisfied({
    "condition": "az.check_exists('my_sections', 3)",
    "function": function() {
        az.add_text('my_sections', 4, {
            "this_class": "score_title",
            "text": "SCOREBOARD"
        })
        az.style_text('score_title', 1, {
            "color": "white",
            "align": "center",
            "font-size": "24px"
        })
    }
})