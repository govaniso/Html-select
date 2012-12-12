/**
 * http://soyprogramador.liz.mx
 *
 *
 * Plugin para jQuery Que permite la manipulación del componente Select de HTML
 * --Seleccionar un valor de acuerdo al value es pecificado
 * --Eliminar una opción de la lista, especificando el value
 * --Carga datos en el select en formatoJS es necesario que contengan el atributo value y text
 * --Carga datos en el select los cuales seran obtenidos mediante una petición ajax
 *
 * @copyright  Copyright (c) 2012 Soy programador (http://soyprogramador.liz.mx)
 * @license    New BSD License
 */

(function($) {
	$.select = {
		/*
		*	setValue()
		*	@param idSelect Id del select
		*	@param value valor a mostrar del select
		*	
		*	Selecciona una opción del select, para mostrar		
		*
		*	$.select.setValue("idSelect","valueDos");
		*/
		setValue: function(idSelect, value) {	
				SelectObject = document.getElementById(idSelect);
				for(index = 0;  index < SelectObject.length;  index++) {
					if(SelectObject[index].value == value){
						SelectObject.selectedIndex = index;						
						break;
					}
				}			
			},
		/*
		*	removeOption()
		*	@param idSelect Id del select
		*	@param value valor de la opción a eliminar del select
		*	
		*	Elimina una opción de un select
		*
		*	$.select.removeOption("idSelect","valueDos");
		*
		*/
		removeOption: function(idSelect, value) {	
				SelectObject = document.getElementById(idSelect);
				for(index = 0;  index < SelectObject.length;  index++) {
					if(SelectObject[index].value == value){
						$("#"+idSelect).find("option[value='"+value+"']").remove();
						break;
					}
				}
			},
		
		/*
		*	loadDataJson()
		*	@param idSelect Id del select
		*	@param json Obejto json en formato value, text
		*	@param limpiar Por debault Antes de cargar los valores, elimina cualquier opcion del combo
		*	
		*	Carga los datos de un objeto Jsonen el combo.		
		*
		*	$.select.loadDataJson("idSelect", json);
		*
		*/
		loadDataJson: function(idSelect, json, dafaultValue){
			$("#"+idSelect).html("");
			for (var i=0, len = json.length; i<len ; i++) {
					var entry = json[i];				
					//console.warn(entry.);
					$('#'+idSelect).append("<option value='"+entry.value+"'>"+entry.text+"</option>");  
				}
			if(dafaultValue != undefined){
				$.select.setValue(idSelect, dafaultValue);
			}
        },
/*
		*	loadDataJsonSetValue()
		*	@param idSelect Id del select
		*	@param json Obejto json en formato value, text
		*	@param limpiar Por debault Antes de cargar los valores, elimina cualquier opcion del combo
		*	
		*	Carga los datos de un objeto Jsonen el combo.		
		*
		*	$.select.loadDataJson("idSelect", json);
		*
		*/
		loadDataJsonSetValue: function(idSelect, json, value){
			$("#"+idSelect).html("");
			for (var i=0, len = json.length; i<len ; i++) {
					var entry = json[i];				
					//console.warn(entry.);
					$('#'+idSelect).append("<option value='"+entry.value+"'>"+entry.text+"</option>");  
				}
			$.select.setValue(idSelect, value);
        },		
		
		/*
		*	loadDataJsonAjax()
		*	@param idSelect Id del select
		*	@param url URL de donde obtendremos el Obejto json en formato value, text|
		*	@param limpiar Por debault Antes de cargar los valores, elimina cualquier opcion del combo
		*	
		*	Carga los datos de un objeto Json obtenidos desde una URL en el combo.		
		*
		*	$.select.loadDataJsonAjax("idSelect", url);
		*
		*/
		loadDataJsonAjax: function(idSelect, url, dafaultValue){
				$("#"+idSelect).html("");
			$.ajax({
                url:  url,
                success: function(json) {
					for (var i=0, len = json.length; i<len ; i++) {
                        var entry = json[i];
                        $('#'+idSelect).append("<option value='"+entry.value+"'>"+entry.text+"</option>");
                    }
					
					if(dafaultValue != undefined){
						$.select.setValue(idSelect, dafaultValue);
					}
                    
                }
            });

        },
		/*
		*	loadDataJsonAjax()
		*	@param idSelect Id del select
		*	@param url URL de donde obtendremos el Obejto json en formato value, text|
		*	@param value Por debault el cual debera estar seleccionado
		*	
		*	Carga los datos de un objeto Json obtenidos desde una URL en el combo.		
		*   A diferencial del anterior setea el un valor al combo.
		*
		*	$.select.loadDataJsonAjax("idSelect", url);
		*
		*/
		loadDataJsonAjaxSetValue: function(idSelect, url, value){
			$("#"+idSelect).html("");
			$.ajax({
                url:  url,
                success: function(json) {
					for (var i=0, len = json.length; i < len ; i++) {
                        var entry = json[i]; 
                        $('#'+idSelect).append("<option value='"+entry.value+"'>"+entry.text+"</option>");
                    }
					$.select.setValue(idSelect, value);
                }
            });
			

        }
	
	}
	
})(jQuery);