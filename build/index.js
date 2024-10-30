(()=>{"use strict";var e,t={493:()=>{const e=window.wp.blocks,t=window.wp.element,n=window.wp.i18n,l=window.wp.blockEditor,o=window.wp.hooks,r=window.wp.components,C=window.wp.primitives,i={mdiAlert:"M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z",mdiAlertOctagram:"M2.2,16.06L3.88,12L2.2,7.94L6.26,6.26L7.94,2.2L12,3.88L16.06,2.2L17.74,6.26L21.8,7.94L20.12,12L21.8,16.06L17.74,17.74L16.06,21.8L12,20.12L7.94,21.8L6.26,17.74L2.2,16.06M13,17V15H11V17H13M13,13V7H11V13H13Z",mdiAlien:"M12,3C16.97,3 21,6.58 21,11C21,15.42 15,21 12,21C9,21 3,15.42 3,11C3,6.58 7.03,3 12,3M10.31,10.93C9.29,9.29 7.47,8.58 6.25,9.34C5.03,10.1 4.87,12.05 5.89,13.69C6.92,15.33 8.74,16.04 9.96,15.28C11.18,14.5 11.33,12.57 10.31,10.93M13.69,10.93C12.67,12.57 12.82,14.5 14.04,15.28C15.26,16.04 17.08,15.33 18.11,13.69C19.13,12.05 18.97,10.1 17.75,9.34C16.53,8.58 14.71,9.29 13.69,10.93M12,17.75C10,17.75 9.5,17 9.5,17C9.5,17.03 10,19 12,19C14,19 14.5,17 14.5,17C14.5,17 14,17.75 12,17.75Z",mdiAsterisk:"M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z",mdiAsteriskCircleOutline:"M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2M12 20C7.61 20 4 16.39 4 12C4 7.61 7.61 4 12 4C16.39 4 20 7.61 20 12C20 16.39 16.39 20 12 20M13 10.27L15.83 8.63L16.83 10.37L14 12L16.83 13.63L15.83 15.37L13 13.73V17H11V13.73L8.17 15.37L7.17 13.63L10 12L7.17 10.37L8.17 8.63L11 10.27V7H13V10.27Z",mdiBalloon:"M13.16,12.74L14,14H12.5C12.35,16.71 12,19.41 11.5,22.08L10.5,21.92C11,19.3 11.34,16.66 11.5,14H10L10.84,12.74C8.64,11.79 7,8.36 7,6A5,5 0 0,1 12,1A5,5 0 0,1 17,6C17,8.36 15.36,11.79 13.16,12.74Z",mdiBell:"M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21",mdiBicycle:"M19 10C18.44 10 17.91 10.11 17.41 10.28L14.46 4.5H11V6H13.54L14.42 7.72L12 13.13L10.23 8.95C10.5 8.85 10.74 8.58 10.74 8.25C10.74 7.84 10.41 7.5 10 7.5H8C7.58 7.5 7.24 7.84 7.24 8.25S7.58 9 8 9H8.61L10.86 14.25H9.92C9.56 11.85 7.5 10 5 10C2.24 10 0 12.24 0 15S2.24 20 5 20C7.5 20 9.56 18.15 9.92 15.75H12.5L15.29 9.43L16.08 10.96C14.82 11.87 14 13.34 14 15C14 17.76 16.24 20 19 20S24 17.76 24 15 21.76 10 19 10M5 18.5C3.07 18.5 1.5 16.93 1.5 15S3.07 11.5 5 11.5C6.67 11.5 8.07 12.68 8.41 14.25H4V15.75H8.41C8.07 17.32 6.67 18.5 5 18.5M19 18.5C17.07 18.5 15.5 16.93 15.5 15C15.5 13.92 16 12.97 16.77 12.33L18.57 15.85L19.89 15.13L18.1 11.63C18.39 11.56 18.69 11.5 19 11.5C20.93 11.5 22.5 13.07 22.5 15S20.93 18.5 19 18.5Z",mdiBomb:"M11.25,6A3.25,3.25 0 0,1 14.5,2.75A3.25,3.25 0 0,1 17.75,6C17.75,6.42 18.08,6.75 18.5,6.75C18.92,6.75 19.25,6.42 19.25,6V5.25H20.75V6A2.25,2.25 0 0,1 18.5,8.25A2.25,2.25 0 0,1 16.25,6A1.75,1.75 0 0,0 14.5,4.25A1.75,1.75 0 0,0 12.75,6H14V7.29C16.89,8.15 19,10.83 19,14A7,7 0 0,1 12,21A7,7 0 0,1 5,14C5,10.83 7.11,8.15 10,7.29V6H11.25M22,6H24V7H22V6M19,4V2H20V4H19M20.91,4.38L22.33,2.96L23.04,3.67L21.62,5.09L20.91,4.38Z",mdiBullhorn:"M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z",mdiCakeVariant:"M12,6C13.11,6 14,5.1 14,4C14,3.62 13.9,3.27 13.71,2.97L12,0L10.29,2.97C10.1,3.27 10,3.62 10,4A2,2 0 0,0 12,6M16.6,16L15.53,14.92L14.45,16C13.15,17.29 10.87,17.3 9.56,16L8.5,14.92L7.4,16C6.75,16.64 5.88,17 4.96,17C4.23,17 3.56,16.77 3,16.39V21A1,1 0 0,0 4,22H20A1,1 0 0,0 21,21V16.39C20.44,16.77 19.77,17 19.04,17C18.12,17 17.25,16.64 16.6,16M18,9H13V7H11V9H6A3,3 0 0,0 3,12V13.54C3,14.62 3.88,15.5 4.96,15.5C5.5,15.5 6,15.3 6.34,14.93L8.5,12.8L10.61,14.93C11.35,15.67 12.64,15.67 13.38,14.93L15.5,12.8L17.65,14.93C18,15.3 18.5,15.5 19.03,15.5C20.11,15.5 21,14.62 21,13.54V12A3,3 0 0,0 18,9Z",mdiCampfire:"M15.9,18.5L21.9,20.1L21.5,22L12.1,19.5L2.7,22L2.2,20.1L8.2,18.5L2.1,16.9L2.6,15L12,17.5L21.4,15L21.9,16.9L15.9,18.5M16.07,7.92C15.91,7.7 15.71,7.5 15.5,7.33C15.05,6.9 14.5,6.59 14.06,6.13C13,5.08 12.79,3.34 13.44,2C12.79,2.17 12.18,2.54 11.67,2.95C9.84,4.46 9.11,7.1 10,9.38C10,9.45 10.04,9.53 10.04,9.62C10.04,9.78 9.93,9.92 9.79,10C9.63,10.05 9.46,10 9.33,9.9C9.28,9.86 9.25,9.82 9.22,9.77C8.42,8.74 8.29,7.26 8.84,6.07C7.65,7.06 7,8.72 7.11,10.29C7.13,10.65 7.18,11 7.3,11.36C7.41,11.8 7.59,12.23 7.82,12.61C8.57,13.86 9.9,14.76 11.32,14.94C12.84,15.14 14.46,14.85 15.63,13.79C16.93,12.59 17.4,10.67 16.71,9L16.61,8.83C16.47,8.5 16.28,8.2 16.04,7.93L16.07,7.92M13.83,12.47C13.63,12.65 13.31,12.83 13.05,12.91C12.26,13.19 11.46,12.79 11,12.31C11.84,12.11 12.34,11.47 12.5,10.83C12.61,10.25 12.39,9.78 12.29,9.22C12.21,8.69 12.22,8.23 12.42,7.73C12.55,8 12.69,8.28 12.86,8.5C13.41,9.22 14.27,9.54 14.45,10.5C14.47,10.63 14.5,10.72 14.5,10.83C14.5,11.43 14.26,12.07 13.82,12.47",mdiCardsHeart:"M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z",mdiCog:"M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z",mdiFlower:"M3,13A9,9 0 0,0 12,22C12,17 7.97,13 3,13M12,5.5A2.5,2.5 0 0,1 14.5,8A2.5,2.5 0 0,1 12,10.5A2.5,2.5 0 0,1 9.5,8A2.5,2.5 0 0,1 12,5.5M5.6,10.25A2.5,2.5 0 0,0 8.1,12.75C8.63,12.75 9.12,12.58 9.5,12.31C9.5,12.37 9.5,12.43 9.5,12.5A2.5,2.5 0 0,0 12,15A2.5,2.5 0 0,0 14.5,12.5C14.5,12.43 14.5,12.37 14.5,12.31C14.88,12.58 15.37,12.75 15.9,12.75C17.28,12.75 18.4,11.63 18.4,10.25C18.4,9.25 17.81,8.4 16.97,8C17.81,7.6 18.4,6.74 18.4,5.75C18.4,4.37 17.28,3.25 15.9,3.25C15.37,3.25 14.88,3.41 14.5,3.69C14.5,3.63 14.5,3.56 14.5,3.5A2.5,2.5 0 0,0 12,1A2.5,2.5 0 0,0 9.5,3.5C9.5,3.56 9.5,3.63 9.5,3.69C9.12,3.41 8.63,3.25 8.1,3.25A2.5,2.5 0 0,0 5.6,5.75C5.6,6.74 6.19,7.6 7.03,8C6.19,8.4 5.6,9.25 5.6,10.25M12,22A9,9 0 0,0 21,13C16,13 12,17 12,22Z",mdiFootPrint:"M16 2A2 2 0 1 1 14 4A2 2 0 0 1 16 2M12.04 3A1.5 1.5 0 1 1 10.54 4.5A1.5 1.5 0 0 1 12.04 3M9.09 4.5A1 1 0 1 1 8.09 5.5A1 1 0 0 1 9.09 4.5M7.04 6A1 1 0 1 1 6.04 7A1 1 0 0 1 7.04 6M14.53 12A2.5 2.5 0 0 0 17 9.24A2.6 2.6 0 0 0 14.39 7H11.91A6 6 0 0 0 6.12 11.4A2 2 0 0 0 6.23 12.8A6.8 6.8 0 0 1 6.91 15.76A6.89 6.89 0 0 1 6.22 18.55A1.92 1.92 0 0 0 6.3 20.31A3.62 3.62 0 0 0 10.19 21.91A3.5 3.5 0 0 0 12.36 16.63A2.82 2.82 0 0 1 11.91 15S11.68 12 14.53 12Z",mdiGhost:"M12,2A9,9 0 0,0 3,11V22L6,19L9,22L12,19L15,22L18,19L21,22V11A9,9 0 0,0 12,2M9,8A2,2 0 0,1 11,10A2,2 0 0,1 9,12A2,2 0 0,1 7,10A2,2 0 0,1 9,8M15,8A2,2 0 0,1 17,10A2,2 0 0,1 15,12A2,2 0 0,1 13,10A2,2 0 0,1 15,8Z",mdiKey:"M7 14C5.9 14 5 13.1 5 12S5.9 10 7 10 9 10.9 9 12 8.1 14 7 14M12.6 10C11.8 7.7 9.6 6 7 6C3.7 6 1 8.7 1 12S3.7 18 7 18C9.6 18 11.8 16.3 12.6 14H16V18H20V14H23V10H12.6Z",mdiLightbulb:"M12,2A7,7 0 0,0 5,9C5,11.38 6.19,13.47 8,14.74V17A1,1 0 0,0 9,18H15A1,1 0 0,0 16,17V14.74C17.81,13.47 19,11.38 19,9A7,7 0 0,0 12,2M9,21A1,1 0 0,0 10,22H14A1,1 0 0,0 15,21V20H9V21Z",mdiRocketLaunch:"M13.13 22.19L11.5 18.36C13.07 17.78 14.54 17 15.9 16.09L13.13 22.19M5.64 12.5L1.81 10.87L7.91 8.1C7 9.46 6.22 10.93 5.64 12.5M21.61 2.39C21.61 2.39 16.66 .269 11 5.93C8.81 8.12 7.5 10.53 6.65 12.64C6.37 13.39 6.56 14.21 7.11 14.77L9.24 16.89C9.79 17.45 10.61 17.63 11.36 17.35C13.5 16.53 15.88 15.19 18.07 13C23.73 7.34 21.61 2.39 21.61 2.39M14.54 9.46C13.76 8.68 13.76 7.41 14.54 6.63S16.59 5.85 17.37 6.63C18.14 7.41 18.15 8.68 17.37 9.46C16.59 10.24 15.32 10.24 14.54 9.46M8.88 16.53L7.47 15.12L8.88 16.53M6.24 22L9.88 18.36C9.54 18.27 9.21 18.12 8.91 17.91L4.83 22H6.24M2 22H3.41L8.18 17.24L6.76 15.83L2 20.59V22M2 19.17L6.09 15.09C5.88 14.79 5.73 14.47 5.64 14.12L2 17.76V19.17Z",mdiRodent:"M21.33 17.39C22.73 18.66 21.8 21 19.92 21H11.06C8.25 21 6 18.75 6 15.94V15.89C3.7 15.42 2 13.41 2 11C2 8.25 4.22 6 7 6H9.5C9.8 6 10 5.77 10 5.5S9.8 5 9.5 5H7V3H9.5C10.88 3 12 4.13 12 5.5C12 6.89 10.88 8 9.5 8H7C5.34 8 4 9.33 4 11C4 12.37 4.92 13.5 6.14 13.87C6.7 11.67 8.67 10 11.06 10C11.86 10 12.66 10.22 13.36 10.55C11.95 11.34 11 12.8 11 14.5C11 15.75 11.5 16.87 12.33 17.67L13.03 16.97C12.38 16.36 12 15.47 12 14.5C12 11.91 14.34 11 15.5 11C17.58 11 19.45 12.89 18.94 15.23L21.33 17.39M18 19C18.56 19 19 18.56 19 18S18.56 17 18 17 17 17.44 17 18 17.44 19 18 19Z",mdiSkull:"M12,2A9,9 0 0,0 3,11C3,14.03 4.53,16.82 7,18.47V22H9V19H11V22H13V19H15V22H17V18.46C19.47,16.81 21,14 21,11A9,9 0 0,0 12,2M8,11A2,2 0 0,1 10,13A2,2 0 0,1 8,15A2,2 0 0,1 6,13A2,2 0 0,1 8,11M16,11A2,2 0 0,1 18,13A2,2 0 0,1 16,15A2,2 0 0,1 14,13A2,2 0 0,1 16,11M12,14L13.5,17H10.5L12,14Z",mdiSpaceInvaders:"M7,6H5V4H7V6M17,6H19V4H17V6M23,12V18H21V14H19V18H17V16H7V18H5V14H3V18H1V12H3V10H5V8H7V6H9V8H15V6H17V8H19V10H21V12H23M15,10V12H17V10H15M7,12H9V10H7V12M11,18H7V20H11V18M17,18H13V20H17V18Z"},a=function(e,n,l){return(0,t.createElement)(C.SVG,{width:l,height:l,viewBox:"0 0 24 24"},(0,t.createElement)(C.Path,{fill:n,d:e}))},c=(0,t.createElement)(C.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)(C.Path,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})),{createHigherOrderComponent:L}=wp.compose;let s="#000";const m=["#d61d23","#f7941c","#ffcf27","#74d300","#007d11","#038dd4","#153062","#662e93","#ff80f3","#eee","#666","#000"],A=function(){let e=[];for(let t in m)e.push({icon:a("M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",m[t]),value:m[t],onClick:()=>s=m[t]});return e}(),H=L((e=>o=>{if("core/paragraph"==o.name||"core/html"==o.name){let C=function(e){let t=[];for(let n in i)t.push({icon:a(i[n],s),onClick:()=>{return e.setAttributes({content:e.attributes.content+"<Image src='data:image/svg+xml;base64,"+(t=i[n],l=s,btoa('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 24 24"><path fill="'+l+'" d="'+t+'" /></svg>')+"'></Image>")});var t,l}});return t}(o);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,o),(0,t.createElement)(l.BlockControls,null,(0,t.createElement)(r.ToolbarGroup,null,(0,t.createElement)(r.DropdownMenu,{icon:c,label:(0,n.__)("Pick icon color"),controls:A}),";",(0,t.createElement)(r.DropdownMenu,{icon:a("m22.58 7.916c-0.1373 0.1351-0.3304 0.1784-0.5035 0.1309-0.08489-0.02303-0.1651-0.06869-0.2315-0.1359l-1.543-1.576-0.5899 2.139c-0.07629 0.2767-0.3625 0.4391-0.6252 0.3665-0.2625-0.07253-0.4532-0.3657-0.3769-0.6432l0.5899-2.139-2.147 0.5584c-0.09129 0.02303-0.1835 0.02303-0.2683-0.00139-0.1732-0.04759-0.3167-0.1839-0.3653-0.3704-0.07211-0.2779 0.09433-0.5615 0.3723-0.634l2.132-0.5623-1.543-1.576c-0.2017-0.2037-0.1991-0.5335-0.0088-0.7388 0.1676-0.1473 0.3903-0.1839 0.578-0.1067 0.06248 0.02687 0.1206 0.06524 0.1712 0.1163l1.557 1.58 0.5899-2.139c0.07629-0.2767 0.3625-0.4391 0.6389-0.3627 0.2767 0.07637 0.4391 0.3627 0.3628 0.6389l-0.5899 2.139 2.147-0.5584c0.06961-0.01919 0.1396-0.02303 0.2064-0.01151 0.1997 0.03071 0.3735 0.1747 0.4129 0.3792 0.07211 0.2779-0.09433 0.5615-0.3723 0.634l-2.132 0.5623 1.557 1.58c0.2015 0.2041 0.1983 0.5335-0.01957 0.7311zm-7.537-6.013a1.873 1.82 22.08 1 1-2.42 0.982 1.873 1.82 22.08 0 1 2.42-0.982m-4.099 0.3011a1.249 1.214 22.08 1 1-1.613 0.6547 1.249 1.214 22.08 0 1 1.613-0.6547m-3.057 0.7237a1.249 1.214 22.08 1 1-1.613 0.6547 1.249 1.214 22.08 0 1 1.613-0.6547m5.925 10.27a3.121 3.035 22.08 0 0 4.117-1.944 3.247 3.156 22.08 0 0-1.997-3.745l-2.869-1.165a7.491 7.284 22.08 0 0-8.708 2.228 2.497 2.428 22.08 0 0-0.512 1.627 8.493 8.255 22.08 0 1-0.5649 3.648 8.604 8.363 22.08 0 1-2.072 2.813 2.397 2.331 22.08 0 0-0.7111 2.017 4.521 4.395 22.08 0 0 3.771 3.627 4.371 4.248 22.08 0 0 4.92-4.92 3.521 3.423 22.08 0 1 0.2236-2.044s1.104-3.481 4.401-2.143z",s,24),label:(0,n.__)("Add icon"),controls:C}),";")))}return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(e,o))}),"withMaterialIconControls");(0,o.addFilter)("editor.BlockEdit","my-plugin/with-inspector-controls",H);const V=function(){let e=[];for(let t in m)e.push({color:m[t]});return e},u=JSON.parse('{"u2":"opendev/icon-footnote"}');(0,e.registerBlockType)(u.u2,{edit:function(e){let{attributes:o,setAttributes:C}=e;return(0,t.createElement)("div",(0,l.useBlockProps)(),(0,t.createElement)("div",{className:"wp-material-footnote"},(0,t.createElement)(t.Fragment,null,(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:"Style",initialOpen:!0},function(e){let{attributes:l,setAttributes:o}=e;return(0,t.createElement)(r.FontSizePicker,{disableCustomFontSizes:!0,fontSizes:[{name:(0,n.__)("Insurence"),size:8,slug:"insurence"},{name:(0,n.__)("Tiny"),size:10,slug:"tiny"},{name:(0,n.__)("Small"),size:12,slug:"small"},{name:(0,n.__)("Normal"),size:14,slug:"normal"},{name:(0,n.__)("Regural"),size:18,slug:"regural"},{name:(0,n.__)("Big"),size:24,slug:"big"}],onChange:e=>{o({textSize:"font-size-"+e+"px"})},value:l.textSize.split("-")[2].replace("px","")})}({attributes:o,setAttributes:C})),(0,t.createElement)(r.PanelBody,{title:"Color",initialOpen:!0},(0,t.createElement)(r.ColorPicker,{color:o.color,onChange:e=>C({color:e}),enableAlpha:!0,defaultValue:"#000"}),(0,t.createElement)(r.ColorPalette,{colors:V(),onChange:e=>C({color:e}),value:o.color,defaultValue:"#000"})),(0,t.createElement)(r.PanelBody,{title:"Icon",initialOpen:!0},function(e){let{attributes:n,setAttributes:l}=e,o=[];for(let e in i)o.push((0,t.createElement)(r.Button,{icon:a(i[e],n.color,24),iconSize:32,onClick:t=>l({icon:i[e]})}));return o}({attributes:o,setAttributes:C}))),(0,t.createElement)("div",{className:"wp-material-footnote-icon"},a(o.icon,o.color)),(0,t.createElement)("span",{class:o.textSize},(0,t.createElement)("div",{className:"wp-material-footnote-text"},(0,t.createElement)(l.RichText,{className:"callout-title",placeholder:(0,n.__)("Write a foot note"),value:o.note,onChange:e=>C({note:e})}))))))},save:function(e){let{attributes:n}=e;return(0,t.createElement)("div",l.useBlockProps.save(),(0,t.createElement)("div",{class:"wp-material-footnote"},(0,t.createElement)("div",{class:"wp-material-footnote-icon",style:"color:gray;"},(0,t.createElement)("svg",{width:"110",height:"110",viewBox:"0 0 24 24"},(0,t.createElement)("path",{fill:n.color,d:n.icon}))),(0,t.createElement)("span",{class:n.textSize},(0,t.createElement)("div",{class:"wp-material-footnote-text"},n.note))))}})}},n={};function l(e){var o=n[e];if(void 0!==o)return o.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,l),r.exports}l.m=t,e=[],l.O=(t,n,o,r)=>{if(!n){var C=1/0;for(L=0;L<e.length;L++){for(var[n,o,r]=e[L],i=!0,a=0;a<n.length;a++)(!1&r||C>=r)&&Object.keys(l.O).every((e=>l.O[e](n[a])))?n.splice(a--,1):(i=!1,r<C&&(C=r));if(i){e.splice(L--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var L=e.length;L>0&&e[L-1][2]>r;L--)e[L]=e[L-1];e[L]=[n,o,r]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};l.O.j=t=>0===e[t];var t=(t,n)=>{var o,r,[C,i,a]=n,c=0;if(C.some((t=>0!==e[t]))){for(o in i)l.o(i,o)&&(l.m[o]=i[o]);if(a)var L=a(l)}for(t&&t(n);c<C.length;c++)r=C[c],l.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return l.O(L)},n=globalThis.webpackChunkicon_footnote=globalThis.webpackChunkicon_footnote||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=l.O(void 0,[431],(()=>l(493)));o=l.O(o)})();