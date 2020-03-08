(function main(){
  plateauEchec();
})();

function plateauEchec(){
  var nombreCases = 8;
  var plateau = document.getElementById('tableEchec');
  var tab = '';
  for(var y = 0; y < nombreCases; y++){
    tab += '<tr>\n'
    for(var x = 0; x < nombreCases; x++){
      if((x + y) % 2 == 0) tab += '<td class = "whiteCase" id = "Case' + x + y + '"></td>\n';
      else tab += '<td class = "blackCase" id = "Case' + x + y + '"></td>\n';
    }
    tab += '</tr>\n'
  }
  plateau.innerHTML = tab;
}