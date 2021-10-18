<?php
namespace NeosRulez\CookieOptIn\Controller;

/*
 * This file is part of the NeosRulez.CookieOptIn package.
 */

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Eel\FlowQuery\FlowQuery;
use Neos\Eel\FlowQuery\Operations;
use Neos\Flow\Http\Component\SetHeaderComponent;
use Neos\Flow\Mvc\View\JsonView;

class ApiController extends ActionController
{

    /**
     * @var string
     */
    protected $defaultViewObjectName = JsonView::class;

    /**
     * @Flow\Inject
     * @var \Neos\ContentRepository\Domain\Service\ContextFactoryInterface
     */
    protected $contextFactory;

    /**
     * @Flow\Inject
     * @var \Neos\Neos\Service\LinkingService
     */
    protected $linkingService;

    /**
     * @var array
     */
    protected $settings;

    /**
     * @param array $settings
     * @return void
     */
    public function injectSettings(array $settings) {
        $this->settings = $settings;
    }

    /**
     * @param string $language
     * @return void
     */
    public function indexAction(string $language = 'en'):void
    {
        $this->response->setComponentParameter(SetHeaderComponent::class,'Access-Control-Allow-Origin', '*');
        $this->response->setStatusCode(200);
        $this->view->assign('value', $this->loadMetadata($language));
    }

    /**
     * @param string $language
     * @return array
     */
    public function loadMetadata(string $language = 'en'):array
    {
        $metadataPath = $this->settings['metadataPathAndFilename'];
        $metadataPath = str_replace('{lang}', $language, $metadataPath);
        $json = @file_get_contents($metadataPath);
        return json_decode($this->replacePlaceholders($json), true);
    }

    /**
     * @param string $json
     * @return string
     */
    public function replacePlaceholders(string $json):string
    {
        $pages = $this->getPages();
        if(array_key_exists('imprint', $pages)) {
            $json = str_replace('{legalnoticelabel}', $pages['imprint']['title'], $json);
            $json = str_replace('{legalnoticelink}', $pages['imprint']['uri'], $json);
        }
        if(array_key_exists('privacy', $pages)) {
            $json = str_replace('{dataprivacylabel}', $pages['privacy']['title'], $json);
            $json = str_replace('{dataprivacylink}', $pages['privacy']['uri'], $json);
        }
        if(array_key_exists('bannerDelayTime', $this->settings)) {
            $json = str_replace('{bannerDelayTime}', $this->settings['bannerDelayTime'], $json);
        }
        return $json;
    }

    /**
     * @return array
     */
    public function getPages():array
    {
        $context = $this->contextFactory->create();
        $node = $context->getCurrentSiteNode();
        $result = [];
        $imprint = (new FlowQuery(array($node)))->find('[instanceof Neos.Neos:Document]')->context(array('workspaceName' => 'live'))->filter('[is_imprint *= true]')->get();
        $privacy = (new FlowQuery(array($node)))->find('[instanceof Neos.Neos:Document]')->context(array('workspaceName' => 'live'))->filter('[is_privacy *= true]')->get();
        if(!empty($imprint)) {
            $result['imprint'] = [
                'title' => $imprint[0]->getProperty('title'),
                'uri' => $this->getNodeUri($imprint[0])
            ];
        }
        if(!empty($privacy)) {
            $result['privacy'] = [
                'title' => $privacy[0]->getProperty('title'),
                'uri' => $this->getNodeUri($privacy[0])
            ];
        }
        return $result;
    }

    /**
     * @param $node
     * @return string
     */
    public function getNodeUri($node):string
    {
        $url = $this->linkingService->createNodeUri(
            $this->getControllerContext(),
            $node,
            null,
            'html',
            'false',
            [],
            '',
            false,
            []
        );
        return $url;
    }

}
