/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  var id = GetQueryString("id");

  if (!id)
  {
	  id = 0;
  }

  /**
     * 内容JSON
     */
  var demoContents = [
	[{
      demo_link: '/album?id=1',
      img_link: '/images/album/f417_ppt/f417_ppt_face.jpg',
      title: 'F417幻灯片介绍',
      core_tech: 'F417',
      description: 'F417幻灯片介绍展示图。'
    }, {
      demo_link: '/album?id=2',
      img_link: '/images/album/f417_show/f417_show_face.jpg',
      title: 'F417运行环境展示',
      core_tech: 'F417',
      description: 'F417在各版本Windows、各版本EXCEL运行环境下的展示图。'
    }, {
      demo_link: '/album?id=3',
      img_link: '/images/album/f417_u417/f417_u417_face.jpg',
      title: 'F417整合U417展示',
      core_tech: 'U417',
      description: 'F417黄金版集成的U417软件运行展示图。'
    }, {
      demo_link: '/album?id=4',
      img_link: '/images/album/f417_tip/f417_tip_face.jpg',
      title: 'F417使用技巧展示',
      core_tech: 'F417',
      description: 'F417各种使用技巧的展示图。'
    }, {
      demo_link: '/album?id=5',
      img_link: '/images/album/f417_nc6/f417_nc6_face.jpg',
      title: 'F417 for NC6',
      core_tech: 'F417 for NC',
      description: 'F417 for NC6软件运行展示图。'
    }],

	[{
      img_link: '/images/album/f417_ppt/f417_ppt_1.jpeg',
      description: 'F417幻灯片介绍1'
    }, {
      img_link: '/images/album/f417_ppt/f417_ppt_2.jpeg',
      description: 'F417幻灯片介绍2'
    }, {
      img_link: '/images/album/f417_ppt/f417_ppt_3.jpeg',
      description: 'F417幻灯片介绍3'
    }, {
      img_link: '/images/album/f417_ppt/f417_ppt_4.jpeg',
      description: 'F417幻灯片介绍4'
    }, {
      img_link: '/images/album/f417_ppt/f417_ppt_5.jpeg',
      description: 'F417幻灯片介绍5'
    }, {
      img_link: '/images/album/f417_ppt/f417_ppt_6.jpeg',
      description: 'F417幻灯片介绍6'
    }, {
      img_link: '/images/album/f417_ppt/f417_ppt_7.jpeg',
      description: 'F417幻灯片介绍7'
    }, {
      img_link: '/images/album/f417_ppt/f417_ppt_8.jpeg',
      description: 'F417幻灯片介绍8'
    }, {
      img_link: '/images/album/f417_ppt/f417_ppt_9.jpeg',
      description: 'F417幻灯片介绍9'
    }, {
      img_link: '/images/album/f417_ppt/f417_ppt_10.jpeg',
      description: 'F417幻灯片介绍10'
    }, {
      img_link: '/images/album/f417_ppt/f417_ppt_11.jpeg',
      description: 'F417幻灯片介绍11'
	}],
	
	[{
      img_link: '/images/album/f417_show/win7cn_excel2016cn.png',
      description: '中文Win7 中文Excel2016'
    }, {
      img_link: '/images/album/f417_show/win10_x64_f417authsrv.png',
      description: 'Win10(64位) F417服务端'
    }, {
      img_link: '/images/album/f417_show/f417_unicode.png',
      description: 'F417国际化 Unicode'
    }, {
      img_link: '/images/album/f417_show/win2012r2_x64_f417.png',
      description: 'Win2012R2(64位) 英文Excel2010'
    }, {
      img_link: '/images/album/f417_show/win2012r2_x64_f417authsrv.png',
      description: 'Win2012R2(64位) F417服务端'
    }, {
      img_link: '/images/album/f417_show/win81cn_excel2007cn.png',
      description: '中文Win81 中文Excel2007'
    }, {
      img_link: '/images/album/f417_show/win2008r2_x64_F417authsrv.png',
      description: 'Win2008R2(64位) F417服务端'
    }, {
      img_link: '/images/album/f417_show/win7cn_x64_excel2000cn.png',
      description: '中文Win7(64位) 中文Excel2000'
    }, {
      img_link: '/images/album/f417_show/win7_cn_excel2013cn.png',
      description: '中文Win7 中文Excel2013'
    }, {
      img_link: '/images/album/f417_show/xp_sp3en_excel2003en.png',
      description: '英文XP(SP3) 英文Excel2003'
    }, {
      img_link: '/images/album/f417_show/win7cn_home_excel2003en.png',
      description: '中文Win7家庭版 英文Excel2003'
    }, {
      img_link: '/images/album/f417_show/xp_sp3en_excel2010en.png',
      description: '英文XP(SP3) 英文Excel2010'
    }, {
      img_link: '/images/album/f417_show/xp_sp3tw_excel2007tw.png',
      description: '繁体XP(SP3) 繁体Excel2007'
    }, {
      img_link: '/images/album/f417_show/xp_sp3en_excel97cn.png',
      description: '英文XP(SP3) 中文Excel97'
	}],

	[{
      img_link: '/images/album/f417_u417/u417_nav.png',
      description: 'U417导航菜单'
    }, {
      img_link: '/images/album/f417_u417/u417_menu.png',
      description: 'U417多样式菜单'
    }, {
      img_link: '/images/album/f417_u417/u417_query_mxz_v12.5.png',
      description: 'U417查询明细账 U8v12.5'
    }, {
      img_link: '/images/album/f417_u417/u417_vouch_v12.5.png',
      description: 'U417填制凭证 U8v12.5'
    }, {
      img_link: '/images/album/f417_u417/u417_uap_form_v11.png',
      description: 'U417内嵌UAP窗体 U8v11'
    }, {
      img_link: '/images/album/f417_u417/u417_vouch_v11.0.png',
      description: 'U417填制凭证 U8v11.0'
    }, {
      img_link: '/images/album/f417_u417/u417_vouch_query_v11.0.png',
      description: 'U417凭证查询 U8v11.0'
    }, {
      img_link: '/images/album/f417_u417/u417_query_mxz_v11.0.png',
      description: 'U417查询明细账 U8v11.0'
    }, {
      img_link: '/images/album/f417_u417/u417_uap_form_v10.png',
      description: 'U417内嵌UAP窗体 U8v10'
    }, {
      img_link: '/images/album/f417_u417/u417_u8_form_v10.png',
      description: 'U417内嵌U8窗体 U8v10'
	}],

	[{
      img_link: '/images/album/f417_tip/f417_ufauth.png',
      description: 'F417权限控制'
	}, {
      img_link: '/images/album/f417_tip/f417_ribbon_enable.png',
      description: '激活F417(Ribbon界面)'
	}, {
      img_link: '/images/album/f417_tip/excel2010_lang_config.png',
      description: '英文Excel2010语言设置'
	}, {
      img_link: '/images/album/f417_tip/F417_xltab.png',
      description: 'F417工作薄标签栏'
	}, {
      img_link: '/images/album/f417_tip/excel_plugin_disable.png',
      description: '启用被禁用的项目(EXCEL2007)'
	}],
	
	[{
      img_link: '/images/album/f417_nc6/nc633_calc.png',
      description: 'NC633计算'
	}, {
      img_link: '/images/album/f417_nc6/nc633_ref.png',
      description: 'NC633参照'
	}, {
      img_link: '/images/album/f417_nc6/nc633_org.png',
      description: 'NC633组织设置'
	}, {
      img_link: '/images/album/f417_nc6/nc633_install_env.png',
      description: 'NC633安装环境'
	}, {
      img_link: '/images/album/f417_nc6/nc633_client.png',
      description: 'NC633客户端'
	}]

  ];

  var title = null;
  if (id > 0)
  {
	  title = demoContents[0][id-1].title;
  }

  contentInit(demoContents, id, title) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(contents, id, title) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var content = contents[id];

  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
	  if (id == 0)
	  {
	    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '   </p>' + '</div>'
	  } else {
		htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].img_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <p>' + content[i].description + '   </p>' + '</div>'
	  }		
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)

  if (id > 0)
  {
	  var h1 = document.querySelector('.right>h1');
	  h1.innerHTML = h1.innerHTML + " - " + title;
  }
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}
