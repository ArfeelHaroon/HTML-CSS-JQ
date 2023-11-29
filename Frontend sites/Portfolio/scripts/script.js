$(document).ready(function(){
    $('a').on("click",function(e){
        e.preventDefault();
        var targetSection = $(this).data('section');
        // Hide all sections
        $('.sections').addClass('hidden');
        
        // Show only the selected section
        $('#' + targetSection).removeClass('hidden');

        if (targetSection === 'resume' || targetSection === 'projects') {
            $('body').css('background-color', '#f8f9fa');
        } else {
            // Reset body background color for other sections
            $('body').css('background-color', '');
        }
    });
});