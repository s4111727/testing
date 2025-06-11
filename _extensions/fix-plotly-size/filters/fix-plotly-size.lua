function Div(el)
  if el.classes:includes('plotly') then
    el.attributes['data-plotly-fix-size'] = 'true'
  end
  return el
end