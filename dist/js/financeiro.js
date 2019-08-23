/* GridStack */
$(function () {
   var options = {
      float: true,
      draggable: {
         handle: '.box-header'
      }
   }; 
   $('.grid-stack').gridstack(options);

   new function () { 
      this.items = [];

      this.grid = $('.grid-stack').data('gridstack');

      var i = 0;

      this.addNewWidget = function () {
         var widg = this.items.pop() || {
            x: 0,
            y: 0,
            width: 6,
            height: 6,
         }; 
         
         this.grid.addWidget($('<div><div class="grid-stack-item-content" style="border-radius:3px;">' +
                                 '<div id="canvas-holder' + i + '" style="width:100%;height:100%;overflow:hidden;">' +
                                    '<div class="box">' +

                                       '<div class="box-header with-border">' +
                                       '<h3 class="box-title" id="box-title' + i + '">Turnover ( Admissões vs Demissões )</h3>' +
                                       '<div class="change-title" id="change-title' + i + '"><button class="btn btn-box-tool" data-toggle="modal" data-target="#title-box"><i class="fa fa-pencil-square-o"></i></button></div>' +
                                          '<div class="box-tools pull-right">' +
                                             '<div class="btn-group">' +
                                                '<button class="btn btn-box-tool gcf" data-toggle="collapse" data-target="#prefer' + i + '"><i class="fa fa-gear"></i></button>' +
                                                '<ul class="collapse prefer" id="prefer' + i + '" role="menu">' +
                                                   '<li type="button" data-toggle="collapse" data-target="#graphs' + i + '"><a>Gráficos</a></li>' +
                                                   '<ul class="collapse" id="graphs' + i + '">' +
                                                      '<select class="ss" id="select-graph' + i + '">' +
                                                         '<option value="bar">Barra</option>' +
                                                         '<option value="doughnut">Rosca</option>' +
                                                         '<option value="line">Linha</option>' +
                                                         '<option value="radar">Radar</option>' +
                                                         '<option value="pie">Pizza</option>' +
                                                         '<option value="barLine">Barra e Linha</option>' +
                                                      '</select>' +
                                                   '</ul>' +

                                                   '<li type="button" data-toggle="collapse" data-target="#graphs-colors' + i + '"><a>Cores</a></li>' +
                                                   '<ul class="collapse" id="graphs-colors' + i + '">' +
                                                      
                                                   '</ul>' +

                                                   '<li type="button" data-toggle="collapse" data-target="#graphs-grids' + i + '"><a>Grids</a></li>' +
                                                   '<ul class="collapse" id="graphs-grids' + i + '">' +
                                                      '<label class="gls" for="#grids-yes-no' + i + '">Habilitar Grids</label>' +
                                                      '<select name="grids-yes-no" class="ss" id="grids-yes-no' + i + '">' +
                                                         '<option value="0">Sim</option>' +
                                                         '<option value="1">Não</option>' +
                                                      '</select>' +
                                                   '</ul>' +
                                                   
                                                   '<li type="button" data-toggle="collapse" data-target="#graphs-labels' + i + '"><a>Labels</a></li>' +
                                                   '<ul class="collapse" id="graphs-labels' + i + '">' +
                                                      '<label class="gls" for="#labels-yes-no' + i + '">Habilitar Labels</label>' +
                                                      '<select name="labels-yes-no" class="ss" id="labels-yes-no' + i + '">' +
                                                         '<option value="0">Sim</option>' +
                                                         '<option value="1">Não</option>' +
                                                      '</select>' +
                                                   '</ul>' +
                                                '</ul>' +
                                             '</div>' +
                                             '<button class="btn btn-box-tool"><i class="fa fa-filter"></i></button>' +
                                             '<button class="btn btn-box-tool" type="button" data-widget="remove"><i class="fa fa-times Close"></i></button>' +
                                          '</div>' +
                                       '</div>' +
                                       /* /.box-header */

                                       '<div class="box-body">' +
                                          '<button id="changeDoughnut' + i + '" class="btn btn-xs btn-primary changeDoughnut">Meia Rosca</button>' +
                                          '<div style="width:100%;height:100%;">' +
                                             '<canvas id="chart-area' + i + '" style="width:100%;height:100%">Seu Browser não suporta o canvas, por favor utilize o <a href="https://www.google.com/chrome/">Chrome</a></canvas>' +
                                          '</div>' +
                                          /* /.row */
                                       '</div>' +
                                       /* ./box-body */

                                       '<div class="box-footer">' +
                                          '<div class="row">' +
                                             '<div>Última atualização: 05/12/2018 18:20</div>' +
                                          '</div>' +
                                          /* /.row */
                                       '</div>' +
                                       /* /.box-footer */
                                    '</div>' +
                                    /* /.box */
                                 '</div>' +
                                 '</div></div>'),
         widg.x, widg.y, widg.width, widg.height, true); 
         addWidgetNew(i);
         acionaFuncoesWidget();
         i++;
         return false;
      }.bind(this);
      
      $('#add-new-widget').click(this.addNewWidget);
   };
});
/* /GridStack */

/* Chart JS */
var randomScalingFactor = function() {
   return Math.round(Math.random() * 100);
}; 

var idprimario = 0;

var d1 = 13;
var d2 = 50;
var d3 = 69;
var d4 = 84;
var d5 = 22;

var red = '#FF0000';
var orange = '#FF4500';
var gold = '#FFD700';
var green = '#32CD32';
var blue = '#6A5ACD';
var maroon = '#800000';
var purple = '#800080';
var teal = '#008080';
var gray = '#808080';
var salmon = '#FA8072';
var darkRed = '#8B0000';
var violet = '#EE82EE';

// [red, orange, gold, green, blue, maroon, purple, teal, violet, gray, salmon, darkRed]


window.addWidgetNew = function() {
   var i = idprimario;
   var ctx = document.getElementById('chart-area' + i).getContext('2d');
   // botao configuracoes do chart
   var ul = document.querySelector('#graphs-colors' + i);
   // chama botao meia rosca
   var halfDonut = document.getElementById('changeDoughnut' + i);
   // chama select de graficos
   var selectGraph = document.getElementById('select-graph' + i);
   var tipo = 'bar';
   var dados = getChartData();
   var opcoes = getChartOptions(tipo);

   // cria novo chart na var tChart
   var tChart = new Chart(ctx, {
      type: tipo,
      
      data: {
         labels: dados.labels,
         datasets: dados.datasets,
      },
         
      options: opcoes,
   });
   
   var botoesCor = colorButtons(tChart.config.type, tChart.data.labels, tChart.data.datasets, i);
   ul.innerHTML = botoesCor;

   // evento do select
   selectGraph.addEventListener('change', graphOption);
   // tipo de grafico escolhido
   function graphOption(){
      'use strict';

      let option = selectGraph.selectedOptions[0].value;

      if(option === 'bar') graphBar();
      if(option === 'doughnut') graphDoughnut();
      if(option === 'line') graphLine();
      if(option === 'radar') graphRadar();
      if(option === 'pie') graphPie();
      // if(option === 'polarArea') graphPolarArea();
      // if(option === 'bubble') graphBubble();
      if(option === 'barLine') graphBarLine();
   };

   // esconder botao meia rosca
   function hideButtonDonut(){
      halfDonut.style.display = 'none';
   };

   // mostrar botao meia rosca
   function showButtonDonut(){
      halfDonut.style.display = 'inline-block';

      halfDonut.addEventListener('click', function() {
         if (tChart.options.circumference === Math.PI) {
            tChart.options.circumference = 2 * Math.PI;
            tChart.options.rotation = -Math.PI / 2;
         } else {
            tChart.options.circumference = Math.PI;
            tChart.options.rotation = -Math.PI;
         }

         tChart.update();
      });
      
      tChart.update();
   };

   // barra
   function graphBar(){
      tChart.destroy();
      hideButtonDonut();

      tipo = 'bar';

      dados = getChartData(tipo);
      opcoes = getChartOptions(tipo);
      
      tChart = new Chart(ctx, {
         type: tipo,

         data: {
            labels: dados.labels,
            datasets: dados.datasets,
         },

         options: opcoes,
      });

      botoesCor = colorButtons(tChart.config.type, tChart.data.labels, tChart.data.datasets, i);
      ul.innerHTML = botoesCor;

      tChart.update();
   };

   // rosca
   function graphDoughnut(){
      tChart.destroy();

      tipo = 'doughnut';

      dados = getChartData(tipo);
      opcoes = getChartOptions(tipo);
      
      tChart = new Chart(ctx, {
         type: tipo,

         data: {
            labels: dados.labels,
            datasets: dados.datasets,
         },

         options: opcoes,
      });

      botoesCor = colorButtons(tChart.config.type, tChart.data.labels, tChart.data.datasets, i);
      ul.innerHTML = botoesCor;

      showButtonDonut();
      tChart.update();
   };

   // linha
   function graphLine(){
      tChart.destroy();
      hideButtonDonut();

      tipo = 'line';

      dados = getChartData(tipo);
      opcoes = getChartOptions(tipo);

      tChart = new Chart(ctx, {
         type: tipo,
         
         data: {
            labels: dados.labels,
            datasets: dados.datasets,
         },

         options: opcoes,
      });
      
      botoesCor = colorButtons(tChart.config.type, tChart.data.labels, tChart.data.datasets, i);
      ul.innerHTML = botoesCor;

      tChart.update();
   };

   // radar
   function graphRadar(){
      tChart.destroy();
      hideButtonDonut();

      tipo = 'radar';

      dados = getChartData(tipo);
      opcoes = getChartOptions(tipo);

      tChart = new Chart(ctx, {
         type: tipo,
         
         data: {
            labels: dados.labels,
            datasets: dados.datasets,
         },
         
         options: opcoes,
      });

      botoesCor = colorButtons(tChart.config.type, tChart.data.labels, tChart.data.datasets, i);
      ul.innerHTML = botoesCor;

      tChart.update();
   }

   // pizza
   function graphPie(){
      tChart.destroy();

      tipo = 'pie';

      dados = getChartData(tipo);
      opcoes = getChartOptions(tipo);
      
      tChart = new Chart(ctx, {
         type: tipo,

         data: {
            labels: dados.labels,
            datasets: dados.datasets,
         },

         options: opcoes,
      });

      botoesCor = colorButtons(tChart.config.type, tChart.data.labels, tChart.data.datasets, i);
      ul.innerHTML = botoesCor;

      showButtonDonut();
      tChart.update();
   };

   // polar area
/*
   function graphPolarArea(){
      tChart.destroy();
      

      tChart = new Chart(ctx, {
         type: 'polarArea',
         data: {
            datasets: [{
               label: 'Dataset',
               data: [d1, d2, d3, d4, d5],
               backgroundColor: [red, orange, gold, green, blue],
            }],
            
            labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
         },

         options: cOptions,
      });

      tChart.update();
   };
*/

   // barra e linha
   function graphBarLine(){
      tChart.destroy();
      hideButtonDonut();

      tipo = 'barLine';

      dados = getChartData(tipo);
      opcoes = getChartOptions(tipo);

      tChart = new Chart(ctx, {
         type: 'bar',

         data: {
            labels: dados.labels,
            datasets: dados.datasets,
         },

         options: opcoes,
      });

      botoesCor = colorButtons(tChart.config.type, tChart.data.labels, tChart.data.datasets, i);
      ul.innerHTML = botoesCor;

      tChart.update();
   }
   
   idprimario++;
};
/* /ChartJS */


// dados do chart
function getDados(){
   let retorno = 
      ' { ' +
      ' "labels": [ ' +
         ' "Janeiro/2018", ' +
         ' "Fevereiro/2018", ' +
         ' "Março/2018", ' +
         ' "Abril/2018", ' +
         ' "Maio/2018", ' +
         ' "Junho/2018", ' +
         ' "Julho/2018", ' +
         ' "Agosto/2018", ' +
         ' "Setembro/2018", ' +
         ' "Outubro/2018", ' +
         ' "Novembro/2018", ' +
         ' "Dezembro/2018" ' +
      ' ], ' +
      ' "datasets": [ ' +
         ' { ' +
            ' "label": "Admitidos", ' +
            ' "data": [ ' +
               ' 25, ' +
               ' 22, ' +
               ' 13, ' +
               ' 7, ' +
               ' 14, ' +
               ' 14, ' +
               ' 5, ' +
               ' 29, ' +
               ' 30, ' +
               ' 18, ' +
               ' 3, ' +
               ' 12 ' +
            ' ] ' +
         ' }, ' +
         ' { ' +
            ' "label": "Demitidos", ' +
            ' "data": [ ' +
               ' 19, ' +
               ' 11, ' +
               ' 15, ' +
               ' 30, ' +
               ' 41, ' +
               ' 10, ' +
               ' 14, ' +
               ' 7, ' +
               ' 3, ' +
               ' 16, ' +
               ' 15, ' +
               ' 3 ' +
            ' ] ' +
         ' } ' +
      ' ] ' +
   ' } ';

   return retorno;
};

// dados convertidos do chart
function getChartData(tipo, posLine = 0){
   let cores = colorsDefault();
   let dados = getDados();
   let dadosObj = JSON.parse(dados);
   let datasets = [];

   if(tipo === 'doughnut' || tipo === 'pie'){
      for(dataset in dadosObj.datasets){
         datasets.push(dadosObj.datasets[dataset]);
         datasets[dataset].backgroundColor = cores;
      };
   } else if(tipo === 'barLine'){
      // let tipos = ['line', 'bar'];
      for(dataset in dadosObj.datasets){
         datasets.push(dadosObj.datasets[dataset]);
         // datasets[dataset].type = tipos[dataset];
         datasets[dataset].backgroundColor = cores[dataset];
         datasets[dataset].borderColor = cores[dataset];
         datasets[dataset].fill = 'false';
         if(dataset == posLine){
            datasets[dataset].type = 'line';
         } else {
            datasets[dataset].type = 'bar';
         }; 
      };
   } else {
      for(dataset in dadosObj.datasets){
         datasets.push(dadosObj.datasets[dataset]);
         datasets[dataset].backgroundColor = cores[dataset];
      };
   };

   return dadosObj;
};

// cores padrao
function colorsDefault(){
   let cores = [green, red, gold, orange, blue, maroon, purple, teal, violet, gray, salmon, darkRed];
   return cores;
};

// opcoes do chart
function getChartOptions(tipo){
   if( tipo === 'doughnut' || tipo === 'pie' ){
      let retorno =
      {
         responsive: true,
         maintainAspectRatio: false,

         legend: {
            position: 'top'
         },

         animation: {
            animateScale: true,
            animateRotate: true
         },

         tooltips: {
            callbacks: {
               title: function(tooltipItem, dataChart){
                  let index = tooltipItem[0].index;
                  let labelData = dataChart.labels[index];

                  return labelData;
               },
               
               label: function(tooltipItem, dataChart){
                  let labelDataset = dataChart.datasets[tooltipItem.datasetIndex].label || '';
                  let data = dataChart.datasets[tooltipItem.datasetIndex].data || '';
                  let index = tooltipItem.index;

                  retorno = labelDataset + ': ' + data[index];

                  return retorno;
               }
            }
         }
      }

      return retorno;
   } else {
      let retorno =
      {
         responsive: true, 
         maintainAspectRatio: false,

         legend: {
            position: 'top',
         },

         animation: {
            animateScale: true,
            animateRotate: true,
         },

         scales: {
            xAxes: [{
               gridLines: {
                  display: true,
               },
            }],
            yAxes: [{
               gridLines: {
                  display: true,
               },
            }],
         },
      }

      return retorno;
   };
};

// adiciona botoes de cores do chart
function colorButtons(tipo, labels, datasets, index){
   let retorno = '';

   if ( tipo === 'doughnut' || tipo === 'pie' ){
      for(tChartLabel in labels){
         retorno += '<li><label onClick="btnChangeColor(this, this.control)" id="control' + labels[tChartLabel] + index + '" for="change'+ labels[tChartLabel] + index +'" class="btn btn-xs btn-info">' + labels[tChartLabel] + '</label></li>' +
         '<input type="color" id="change'+ labels[tChartLabel] + index +'" style="display:none">';
      };
   } else {
      for(tChartDataset in datasets){
         retorno += '<li><label onClick="btnChangeColor(this, this.control)" id="control' + datasets[tChartDataset].label + index + '" for="change'+ datasets[tChartDataset].label + index +'" class="btn btn-xs btn-info">' + datasets[tChartDataset].label + '</label></li>' +
         '<input type="color" id="change'+ datasets[tChartDataset].label + index +'" style="display:none">';
      };
   };

   return retorno;
};

// muda a cor de fundo do botao
function btnChangeColor(label, input){
   let retorno = '';
   
   input.addEventListener('change', function(){
      label.style.backgroundColor = input.value;
   });

   return retorno;
};


/* select2 */
$(document).ready(function(){
   $('.select-style').select2();
});
// mudar entre logos grande e pequeno
$('.sidebar-toggle').click(function(){
   $('.user-panel').children().toggleClass('mostra');
});
// esconder a ul das config do chart ao clicar fora do box


// funcao a ser executada toda vez que adicionar um novo widget
function acionaFuncoesWidget(){
   // efeito accordion no botao configuracao do box
   function of(){
      $('.prefer > ul').removeClass('in');
   };
   $('.prefer > li').click(of); // quando clicar na li das configuracoes do chart
   $('.box .gcf').click(of); // quando clicar no botao de configuracoes do chart

   // i++;
};