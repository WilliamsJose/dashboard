// /* select2 */
// $(document).ready(function() {
//    $('.selectStyle').select2();
// });

// /* elementos a personalizar */
// var $navTop = document.getElementById('nav-top');
// var $navSide = document.getElementById('nav-side');
// var $navLogo = document.getElementById('nav-logo');
// // links
// var $asideLinks = document.querySelectorAll('.asideLinks'); 
// // links ativos
// var $activeLinks = document.querySelectorAll('.sidebar-menu .active');
// // badge
// var $badge = document.querySelectorAll('.badge');
// // header do sidebar
// var $sideHeader = document.querySelectorAll('.sidebar-menu .header');
// /* /elementos a personalizar */

// /* inputs */
// var $colorNavTop = document.getElementById('color-nav-top'); // input bg topbar
// var $colorNavSide = document.getElementById('color-nav-side'); // input bg sidebar
// var $colorNavLogo = document.getElementById('color-nav-logo'); // input bg logo
// var $colorNavLinks = document.getElementById('color-nav-links'); // input cor dos links
// var $colorNavLinksActive = document.getElementById('color-nav-link-active'); // input cor dos links ativos
// var $colorNavHeader = document.getElementById('color-nav-header'); // input bg header
// /* /inputs */

// /* botoes */
// var $selectSkin = document.getElementById('select-template'); // botao selecionar template
// var $saveLayout = document.getElementById('saveLayout'); // botao salvar configuracoes layout
// /* /botoes */

// function apply(){
//    // topnav = valor do input Cor da barra do topo
//    $($navTop).css({'background-color': $colorNavTop.value});
//    // sidebar = valor do input Cor do menu
//    $($navSide).css({'background-color': $colorNavSide.value});
//    // logo da topnav = valor de Cor de fundo do logo
//    $($navLogo).css({'background-color': $colorNavLogo.value});
//    // bg do header da sidebar = valor de Cor de fundo do cabeçalho
//    $($sideHeader).css({'background-color': $colorNavHeader.value, 'color': $colorNavLinks.value});

//    $('body').removeClass().addClass('sidebar-mini ' + 'sidebar-collapse ' + $selectSkin.value);
//    changeLinksColor();
//    changeBadgeColor();
//    changeActiveLinksColor();
// };

// function changeLinksColor(){
//    // cor dos links
//    $($asideLinks).css({
//       'color': $colorNavLinks.value,
//    });
//    // cor hover dos links
//    $($asideLinks).hover(function(){
//          $(this).css({
//             'color': $colorNavLinks.value + '66'
//          });
//       }, function(){
//          $(this).css({
//             'color': $colorNavLinks.value
//          });
//       }
//    );
// };

// function changeBadgeColor(){
//    // badge
//    $($badge).removeClass('bg-purple');
//    // cor do badge
//    $($badge).css({
//       "color": $colorNavLinks.value + 'a6',
//       "background-color": $colorNavLinks.value + '4d',
//    });
//    // cor hover no badge
//    $($badge).hover(function(){
//       $(this).css({
//          'color': $colorNavLinks.value, 
//          'background-color': $colorNavLinks.value + 'a6'
//       });
//    }, function(){
//       $(this).css({
//          'color': $colorNavLinks.value + 'a6',
//          'background-color': $colorNavLinks.value + '4d'
//       });
//    });
// };

// function changeActiveLinksColor(){
//    // cor dos links ativos
//    $($activeLinks).css({
//       // 'color': ,
//       'background-color': $colorNavLinksActive.value, 
//       'border-left-color': $colorNavLinksActive.value + '4d'
//    })
// };

// $saveLayout.addEventListener('click', apply);


var file = document.getElementById('configuracoes_logoFile');
var miniFile = document.getElementById('configuracoes_logoMiniFile');
var fileName = document.getElementById('file-name');
var miniFileName = document.getElementById('mini-file-name');
// se há algum arquivo, mostra o nome dele
function showNameFile(){
   var imgName = file.files[0].name
   if(file.files.length > 0) fileName.textContent = imgName;
};

function showNameMiniFile(){
   var miniImgName = miniFile.files[0].name
   if(miniFile.files.length > 0) miniFileName.textContent = miniImgName;
};

file.addEventListener('change', showNameFile);
miniFile.addEventListener('change', showNameMiniFile);

$('.sidebar-toggle').click(function(){
   $('.user-panel').children().toggleClass('mostra');
});