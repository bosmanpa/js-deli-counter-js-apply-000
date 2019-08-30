function takeANumber (line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function takeANumber (line) {
  var pos = 0
  pos++
  return `Welcome, you have ticket number ${pos}`
  line.push(pos)
}


function nowServing (line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return `Currently serving ${line.shift()}.`
  }
}
function currentLine(line) {
  
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var deliline = []
    for (let i = 0; i < line.length; i++) {
    deliline.push(`${i+1}. ${line[i]}`)
      
    }
    return(`The line is currently: ${deliline.join(", ")}`)
  }
}