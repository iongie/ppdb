'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ppdb documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-8fba2b122920dfc2af3f02bf2b1a63fe6edf4548804f016f5b61c701bdaef9b2fee2c4e2ccb2c95778226be7d1229110e39f46a248c0161ae30053e6434d66da"' : 'data-bs-target="#xs-components-links-module-AppModule-8fba2b122920dfc2af3f02bf2b1a63fe6edf4548804f016f5b61c701bdaef9b2fee2c4e2ccb2c95778226be7d1229110e39f46a248c0161ae30053e6434d66da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8fba2b122920dfc2af3f02bf2b1a63fe6edf4548804f016f5b61c701bdaef9b2fee2c4e2ccb2c95778226be7d1229110e39f46a248c0161ae30053e6434d66da"' :
                                            'id="xs-components-links-module-AppModule-8fba2b122920dfc2af3f02bf2b1a63fe6edf4548804f016f5b61c701bdaef9b2fee2c4e2ccb2c95778226be7d1229110e39f46a248c0161ae30053e6434d66da"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BerandaModule.html" data-type="entity-link" >BerandaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BerandaModule-3717c14bb624b566a32c5e4a8d30db8ca3b7c417ed87bffaed965797bea837c02c03a3dcdf4f6727191bc3b2f1376048f648e5693afe82d5bfa050e85b001602"' : 'data-bs-target="#xs-components-links-module-BerandaModule-3717c14bb624b566a32c5e4a8d30db8ca3b7c417ed87bffaed965797bea837c02c03a3dcdf4f6727191bc3b2f1376048f648e5693afe82d5bfa050e85b001602"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BerandaModule-3717c14bb624b566a32c5e4a8d30db8ca3b7c417ed87bffaed965797bea837c02c03a3dcdf4f6727191bc3b2f1376048f648e5693afe82d5bfa050e85b001602"' :
                                            'id="xs-components-links-module-BerandaModule-3717c14bb624b566a32c5e4a8d30db8ca3b7c417ed87bffaed965797bea837c02c03a3dcdf4f6727191bc3b2f1376048f648e5693afe82d5bfa050e85b001602"' }>
                                            <li class="link">
                                                <a href="components/BerandaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BerandaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentDasborModule.html" data-type="entity-link" >ComponentDasborModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ComponentDasborModule-6b5b50cca42a1b0f16081c148200fa3312379ed7ae52b2a9722b5eaec69074dc1c583fc661fb3ff3ad3bac5037a730f0d4f8f6461391e179c1ed03c1c7e3972e"' : 'data-bs-target="#xs-components-links-module-ComponentDasborModule-6b5b50cca42a1b0f16081c148200fa3312379ed7ae52b2a9722b5eaec69074dc1c583fc661fb3ff3ad3bac5037a730f0d4f8f6461391e179c1ed03c1c7e3972e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentDasborModule-6b5b50cca42a1b0f16081c148200fa3312379ed7ae52b2a9722b5eaec69074dc1c583fc661fb3ff3ad3bac5037a730f0d4f8f6461391e179c1ed03c1c7e3972e"' :
                                            'id="xs-components-links-module-ComponentDasborModule-6b5b50cca42a1b0f16081c148200fa3312379ed7ae52b2a9722b5eaec69074dc1c583fc661fb3ff3ad3bac5037a730f0d4f8f6461391e179c1ed03c1c7e3972e"' }>
                                            <li class="link">
                                                <a href="components/FormPilihSekolahDasborComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormPilihSekolahDasborComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HasilSeleksiSayaDasborComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HasilSeleksiSayaDasborComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KonfirmasiFormPilihSekolahDasborComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KonfirmasiFormPilihSekolahDasborComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResponModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResponModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarDasborComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarDasborComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentUtamaModule.html" data-type="entity-link" >ComponentUtamaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ComponentUtamaModule-2daae05b3a49626e2f306c204abcaf9007075d3906ccf9da70c93c62afac210a2cb547d9d8f3342886d5e1b00a27751ac9c314aede57ae60c2644a5bbf394635"' : 'data-bs-target="#xs-components-links-module-ComponentUtamaModule-2daae05b3a49626e2f306c204abcaf9007075d3906ccf9da70c93c62afac210a2cb547d9d8f3342886d5e1b00a27751ac9c314aede57ae60c2644a5bbf394635"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentUtamaModule-2daae05b3a49626e2f306c204abcaf9007075d3906ccf9da70c93c62afac210a2cb547d9d8f3342886d5e1b00a27751ac9c314aede57ae60c2644a5bbf394635"' :
                                            'id="xs-components-links-module-ComponentUtamaModule-2daae05b3a49626e2f306c204abcaf9007075d3906ccf9da70c93c62afac210a2cb547d9d8f3342886d5e1b00a27751ac9c314aede57ae60c2644a5bbf394635"' }>
                                            <li class="link">
                                                <a href="components/HeroUtamaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroUtamaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupportUsUtamaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SupportUsUtamaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DasborModule.html" data-type="entity-link" >DasborModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DasborModule-8a413419168a000266b18fb08e5fe376924ae86d4580ffca0e52d52b3f6839c7c2dcb3ad40485e3152d49cd3a355db1a366f736be4dcd8a48670a42fcb931629"' : 'data-bs-target="#xs-components-links-module-DasborModule-8a413419168a000266b18fb08e5fe376924ae86d4580ffca0e52d52b3f6839c7c2dcb3ad40485e3152d49cd3a355db1a366f736be4dcd8a48670a42fcb931629"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DasborModule-8a413419168a000266b18fb08e5fe376924ae86d4580ffca0e52d52b3f6839c7c2dcb3ad40485e3152d49cd3a355db1a366f736be4dcd8a48670a42fcb931629"' :
                                            'id="xs-components-links-module-DasborModule-8a413419168a000266b18fb08e5fe376924ae86d4580ffca0e52d52b3f6839c7c2dcb3ad40485e3152d49cd3a355db1a366f736be4dcd8a48670a42fcb931629"' }>
                                            <li class="link">
                                                <a href="components/DasborComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DasborComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DasborModule.html" data-type="entity-link" >DasborModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DasborModule-b07bfb7a83279faf1faa736f7ef8ca70c747aebf89f403b4ac6a296ba700665ff3471e1d366647a00662b40cb922a0ff6f6306e80e5320ab4191c31f8459560f-1"' : 'data-bs-target="#xs-components-links-module-DasborModule-b07bfb7a83279faf1faa736f7ef8ca70c747aebf89f403b4ac6a296ba700665ff3471e1d366647a00662b40cb922a0ff6f6306e80e5320ab4191c31f8459560f-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DasborModule-b07bfb7a83279faf1faa736f7ef8ca70c747aebf89f403b4ac6a296ba700665ff3471e1d366647a00662b40cb922a0ff6f6306e80e5320ab4191c31f8459560f-1"' :
                                            'id="xs-components-links-module-DasborModule-b07bfb7a83279faf1faa736f7ef8ca70c747aebf89f403b4ac6a296ba700665ff3471e1d366647a00662b40cb922a0ff6f6306e80e5320ab4191c31f8459560f-1"' }>
                                            <li class="link">
                                                <a href="components/DasborComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DasborComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DirectivesModule.html" data-type="entity-link" >DirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-DirectivesModule-a237a5b4229b542de64915f0468dcc23fd82d314e0655d17ba96498ae8ce96fc488d3d0434895175da4a1b97e4f32bb7620246cc0c190e2247225f0f59648862"' : 'data-bs-target="#xs-directives-links-module-DirectivesModule-a237a5b4229b542de64915f0468dcc23fd82d314e0655d17ba96498ae8ce96fc488d3d0434895175da4a1b97e4f32bb7620246cc0c190e2247225f0f59648862"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DirectivesModule-a237a5b4229b542de64915f0468dcc23fd82d314e0655d17ba96498ae8ce96fc488d3d0434895175da4a1b97e4f32bb7620246cc0c190e2247225f0f59648862"' :
                                        'id="xs-directives-links-module-DirectivesModule-a237a5b4229b542de64915f0468dcc23fd82d314e0655d17ba96498ae8ce96fc488d3d0434895175da4a1b97e4f32bb7620246cc0c190e2247225f0f59648862"' }>
                                        <li class="link">
                                            <a href="directives/InputHanyaNomorDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputHanyaNomorDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/SidebarDropdownDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarDropdownDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/Halaman403Module.html" data-type="entity-link" >Halaman403Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Halaman403Module-f669591993e3a2f34db6c2a8d1e0eb2c5c86d0cd71cd5bbb8ec373c840229b7671f2be8561daa3e832805dedd858af1db215d1e61cbbec0e071ecfcdbd865be6"' : 'data-bs-target="#xs-components-links-module-Halaman403Module-f669591993e3a2f34db6c2a8d1e0eb2c5c86d0cd71cd5bbb8ec373c840229b7671f2be8561daa3e832805dedd858af1db215d1e61cbbec0e071ecfcdbd865be6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Halaman403Module-f669591993e3a2f34db6c2a8d1e0eb2c5c86d0cd71cd5bbb8ec373c840229b7671f2be8561daa3e832805dedd858af1db215d1e61cbbec0e071ecfcdbd865be6"' :
                                            'id="xs-components-links-module-Halaman403Module-f669591993e3a2f34db6c2a8d1e0eb2c5c86d0cd71cd5bbb8ec373c840229b7671f2be8561daa3e832805dedd858af1db215d1e61cbbec0e071ecfcdbd865be6"' }>
                                            <li class="link">
                                                <a href="components/Halaman403Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Halaman403Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Halaman404Module.html" data-type="entity-link" >Halaman404Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Halaman404Module-25c93a49112c7bf3955014f9d1f95225b1bd48a3f6025f152c075c1396a69c754d33121a54942e4dacada97cba79d9e0f3ce5b44dde496f0743e944e5463a81a"' : 'data-bs-target="#xs-components-links-module-Halaman404Module-25c93a49112c7bf3955014f9d1f95225b1bd48a3f6025f152c075c1396a69c754d33121a54942e4dacada97cba79d9e0f3ce5b44dde496f0743e944e5463a81a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Halaman404Module-25c93a49112c7bf3955014f9d1f95225b1bd48a3f6025f152c075c1396a69c754d33121a54942e4dacada97cba79d9e0f3ce5b44dde496f0743e944e5463a81a"' :
                                            'id="xs-components-links-module-Halaman404Module-25c93a49112c7bf3955014f9d1f95225b1bd48a3f6025f152c075c1396a69c754d33121a54942e4dacada97cba79d9e0f3ce5b44dde496f0743e944e5463a81a"' }>
                                            <li class="link">
                                                <a href="components/Halaman404Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Halaman404Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Halaman500Module.html" data-type="entity-link" >Halaman500Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Halaman500Module-e75fb023942c15f0b494232b8562058ecb42f7a3a34ef7e863e86547fcd65ad3bc469530272b347a1e58f134af1c7e33044943519d880f68976821585be23d51"' : 'data-bs-target="#xs-components-links-module-Halaman500Module-e75fb023942c15f0b494232b8562058ecb42f7a3a34ef7e863e86547fcd65ad3bc469530272b347a1e58f134af1c7e33044943519d880f68976821585be23d51"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Halaman500Module-e75fb023942c15f0b494232b8562058ecb42f7a3a34ef7e863e86547fcd65ad3bc469530272b347a1e58f134af1c7e33044943519d880f68976821585be23d51"' :
                                            'id="xs-components-links-module-Halaman500Module-e75fb023942c15f0b494232b8562058ecb42f7a3a34ef7e863e86547fcd65ad3bc469530272b347a1e58f134af1c7e33044943519d880f68976821585be23d51"' }>
                                            <li class="link">
                                                <a href="components/Halaman500Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Halaman500Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HasilSeleksiModule.html" data-type="entity-link" >HasilSeleksiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HasilSeleksiModule-e5a90b897c5b0fdf444f5c5d658aff58e268a49f7c6de8280b675efe39b794a6e5abdee64d5f1cb173a724c0e1c543e6ab583280c8035ca052f4a5acce51f855"' : 'data-bs-target="#xs-components-links-module-HasilSeleksiModule-e5a90b897c5b0fdf444f5c5d658aff58e268a49f7c6de8280b675efe39b794a6e5abdee64d5f1cb173a724c0e1c543e6ab583280c8035ca052f4a5acce51f855"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HasilSeleksiModule-e5a90b897c5b0fdf444f5c5d658aff58e268a49f7c6de8280b675efe39b794a6e5abdee64d5f1cb173a724c0e1c543e6ab583280c8035ca052f4a5acce51f855"' :
                                            'id="xs-components-links-module-HasilSeleksiModule-e5a90b897c5b0fdf444f5c5d658aff58e268a49f7c6de8280b675efe39b794a6e5abdee64d5f1cb173a724c0e1c543e6ab583280c8035ca052f4a5acce51f855"' }>
                                            <li class="link">
                                                <a href="components/FormHasilSeleksiUtamaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormHasilSeleksiUtamaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HasilSeleksiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HasilSeleksiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JadwalModule.html" data-type="entity-link" >JadwalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-JadwalModule-6588899afa2204999e953f0debf9a84e3ae408e221a001da7b5585ba8e9a0dfeb7b2744bdcbe6b847bdb2297bb6f83a7742ad45c55b4303e5f2915ec1f47d0a2"' : 'data-bs-target="#xs-components-links-module-JadwalModule-6588899afa2204999e953f0debf9a84e3ae408e221a001da7b5585ba8e9a0dfeb7b2744bdcbe6b847bdb2297bb6f83a7742ad45c55b4303e5f2915ec1f47d0a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-JadwalModule-6588899afa2204999e953f0debf9a84e3ae408e221a001da7b5585ba8e9a0dfeb7b2744bdcbe6b847bdb2297bb6f83a7742ad45c55b4303e5f2915ec1f47d0a2"' :
                                            'id="xs-components-links-module-JadwalModule-6588899afa2204999e953f0debf9a84e3ae408e221a001da7b5585ba8e9a0dfeb7b2744bdcbe6b847bdb2297bb6f83a7742ad45c55b4303e5f2915ec1f47d0a2"' }>
                                            <li class="link">
                                                <a href="components/JadwalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JadwalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LoginModule-b9298da1b8f00554d11d8ee5f7c2cb79fef136d25750cfa781a94062eddd7d5ddae493ec54688237653a5247aaea75bdd9eff98eef7593c64a24f21e1bd4d16e"' : 'data-bs-target="#xs-components-links-module-LoginModule-b9298da1b8f00554d11d8ee5f7c2cb79fef136d25750cfa781a94062eddd7d5ddae493ec54688237653a5247aaea75bdd9eff98eef7593c64a24f21e1bd4d16e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-b9298da1b8f00554d11d8ee5f7c2cb79fef136d25750cfa781a94062eddd7d5ddae493ec54688237653a5247aaea75bdd9eff98eef7593c64a24f21e1bd4d16e"' :
                                            'id="xs-components-links-module-LoginModule-b9298da1b8f00554d11d8ee5f7c2cb79fef136d25750cfa781a94062eddd7d5ddae493ec54688237653a5247aaea75bdd9eff98eef7593c64a24f21e1bd4d16e"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProsesModule.html" data-type="entity-link" >ProsesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ProsesModule-18dd99772a9c559f7ec0dfb25ece76d6303c019f18f0ed04c890e36a0a92506a2b74545c111a74692cbfaefdc054f423be5ffec3cfd4758ca1c934cc3a76417d"' : 'data-bs-target="#xs-components-links-module-ProsesModule-18dd99772a9c559f7ec0dfb25ece76d6303c019f18f0ed04c890e36a0a92506a2b74545c111a74692cbfaefdc054f423be5ffec3cfd4758ca1c934cc3a76417d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProsesModule-18dd99772a9c559f7ec0dfb25ece76d6303c019f18f0ed04c890e36a0a92506a2b74545c111a74692cbfaefdc054f423be5ffec3cfd4758ca1c934cc3a76417d"' :
                                            'id="xs-components-links-module-ProsesModule-18dd99772a9c559f7ec0dfb25ece76d6303c019f18f0ed04c890e36a0a92506a2b74545c111a74692cbfaefdc054f423be5ffec3cfd4758ca1c934cc3a76417d"' }>
                                            <li class="link">
                                                <a href="components/ProsesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProsesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegulasiModule.html" data-type="entity-link" >RegulasiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RegulasiModule-d58624d577c49baad1e5ed2e86eeffe4cb7a94c4c10e5a5c1d319b25d76c1978b8f0df49db6ee266040ccd794c5bec9cffc3a3d4b0f4beffae31ba4c974612fa"' : 'data-bs-target="#xs-components-links-module-RegulasiModule-d58624d577c49baad1e5ed2e86eeffe4cb7a94c4c10e5a5c1d319b25d76c1978b8f0df49db6ee266040ccd794c5bec9cffc3a3d4b0f4beffae31ba4c974612fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegulasiModule-d58624d577c49baad1e5ed2e86eeffe4cb7a94c4c10e5a5c1d319b25d76c1978b8f0df49db6ee266040ccd794c5bec9cffc3a3d4b0f4beffae31ba4c974612fa"' :
                                            'id="xs-components-links-module-RegulasiModule-d58624d577c49baad1e5ed2e86eeffe4cb7a94c4c10e5a5c1d319b25d76c1978b8f0df49db6ee266040ccd794c5bec9cffc3a3d4b0f4beffae31ba4c974612fa"' }>
                                            <li class="link">
                                                <a href="components/RegulasiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegulasiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtamaModule.html" data-type="entity-link" >UtamaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UtamaModule-62ddd4c5518d4216c90848f298f59eac1ba1e0bf70f2c4e10f9ef21c8eef31a61da256bb9ae708eac76e079971de5506c3d1e494a7daa12c732d9857dc9ee117"' : 'data-bs-target="#xs-components-links-module-UtamaModule-62ddd4c5518d4216c90848f298f59eac1ba1e0bf70f2c4e10f9ef21c8eef31a61da256bb9ae708eac76e079971de5506c3d1e494a7daa12c732d9857dc9ee117"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UtamaModule-62ddd4c5518d4216c90848f298f59eac1ba1e0bf70f2c4e10f9ef21c8eef31a61da256bb9ae708eac76e079971de5506c3d1e494a7daa12c732d9857dc9ee117"' :
                                            'id="xs-components-links-module-UtamaModule-62ddd4c5518d4216c90848f298f59eac1ba1e0bf70f2c4e10f9ef21c8eef31a61da256bb9ae708eac76e079971de5506c3d1e494a7daa12c732d9857dc9ee117"' }>
                                            <li class="link">
                                                <a href="components/HeaderMobileUtamaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderMobileUtamaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderUtamaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderUtamaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UtamaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UtamaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CallApiService.html" data-type="entity-link" >CallApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HelperService.html" data-type="entity-link" >HelperService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NavigasiService.html" data-type="entity-link" >NavigasiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StateHasilSeleksiService.html" data-type="entity-link" >StateHasilSeleksiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StateLoginService.html" data-type="entity-link" >StateLoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatePilihMenuService.html" data-type="entity-link" >StatePilihMenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StatePilihSekolahService.html" data-type="entity-link" >StatePilihSekolahService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StateResponService.html" data-type="entity-link" >StateResponService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Aktif.html" data-type="entity-link" >Aktif</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Alamat.html" data-type="entity-link" >Alamat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Auth.html" data-type="entity-link" >Auth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DaftarSekolah.html" data-type="entity-link" >DaftarSekolah</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataNilai.html" data-type="entity-link" >DataNilai</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ganti.html" data-type="entity-link" >Ganti</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HasilSeleksi.html" data-type="entity-link" >HasilSeleksi</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/HasilSeleksiSaya.html" data-type="entity-link" >HasilSeleksiSaya</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Kategori.html" data-type="entity-link" >Kategori</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Kategori-1.html" data-type="entity-link" >Kategori</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Menu.html" data-type="entity-link" >Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Nilai.html" data-type="entity-link" >Nilai</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NilaiRapor.html" data-type="entity-link" >NilaiRapor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Peserta.html" data-type="entity-link" >Peserta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PilihMenu.html" data-type="entity-link" >PilihMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PilihSekolah.html" data-type="entity-link" >PilihSekolah</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Ranking.html" data-type="entity-link" >Ranking</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Respon.html" data-type="entity-link" >Respon</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RiwayatPilihan.html" data-type="entity-link" >RiwayatPilihan</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sekolah.html" data-type="entity-link" >Sekolah</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sekolah-1.html" data-type="entity-link" >Sekolah</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SubMenu.html" data-type="entity-link" >SubMenu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});