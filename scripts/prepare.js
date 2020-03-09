az.load_font('Krub')
az.style_body({
    "font-family": "Krub",
    "min-width": "1300px",
    "max-width": "1300px",
    "align": "center"
})
az.add_top_button({
    "this_class": "scroll_to_top",
    "text": "TOP",
    "side": "right",
    "spin": true
})
az.add_sections({
    "this_class": "my_sections",
    "sections": 4
})
az.all_style_sections('my_sections', {
    "height": "500px"
})
az.style_sections('my_sections', 1, {
    "height": "60px"
})
az.add_layout('my_sections', 1, {
    "this_class": "banner_layout",
    "row_class": "banner_layout_rows",
    "cell_class": "banner_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 3
})
az.style_layout('banner_layout', 1, {
    "height": "auto",
    "width": "100%",
    "column_widths": ['5%', '25%', '70%'],
    "border": 0
})
az.add_image('banner_layout_cells', 1, {
    "this_class": "logo",
    "image_path": "http://bit.ly/2GJWWWE"
})
az.style_image('logo', 1, {
    "width": "60px",
    "margin-top": "0px"
})
az.add_text('banner_layout_cells', 2, {
    "this_class": "app_title",
    "text": "FLOWER POWER"
})
az.style_text('app_title', 1, {
    "color": "white",
    "font-size": "30px"
})
az.style_layout('banner_layout_cells', 2, {
    "halign": "left"
})
az.style_layout('banner_layout_cells', 3, {
    "halign": "right"
})