<?php
namespace NeosRulez\CookieOptIn\Controller;

/*
 * This file is part of the NeosRulez.CookieOptIn package.
 */

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Http\Component\SetHeaderComponent;
use Neos\Flow\Mvc\View\JsonView;
use Neos\Eel\FlowQuery\FlowQuery;
use Neos\Eel\FlowQuery\Operations;

class MetadataController extends ActionController
{

    /**
     * @var string string
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
     * @param string $lang
     * @return void
     */
    public function metadataAction(string $lang)
    {
        $this->response->setComponentParameter(SetHeaderComponent::class,'Access-Control-Allow-Origin', '*');
        $json = @file_get_contents('resource://NeosRulez.CookieOptIn/Private/Metadata/en.cookie.json');
        if(@file_get_contents($this->settings['cookieMetadata'] . $lang . '.cookie.json')) {
            $json = @file_get_contents($this->settings['cookieMetadata'] . $lang . '.cookie.json');
        }
        $result = json_decode($json, true);
        $sites = $this->getSites();
        if($sites) {
            $result['links']['legalnotice'] = false;
            if($sites['legalnotice']['title']) {
                $result['links']['legalnotice']['label'] = $sites['legalnotice']['title'];
                $result['links']['legalnotice']['href'] = $sites['legalnotice']['uri'];
            }
            $result['links']['dataprivacy'] = false;
            if($sites['dataprivacy']['title']) {
                $result['links']['dataprivacy']['label'] = $sites['dataprivacy']['title'];
                $result['links']['dataprivacy']['href'] = $sites['dataprivacy']['uri'];
            }
        }
        $result['layout'] = $this->settings['layout'];
        $this->response->setStatusCode(200);
        $this->view->assign('value', $result);

    }

    /**
     * @return array
     */
    public function getSites():array
    {
        $context = $this->contextFactory->create();
        $node = $context->getCurrentSiteNode();
        $imprint = (new FlowQuery(array($node)))->find('[instanceof Neos.Neos:Document]')->context(array('workspaceName' => 'live'))->filter('[is_imprint *= true]')->get();
        $privacy = (new FlowQuery(array($node)))->find('[instanceof Neos.Neos:Document]')->context(array('workspaceName' => 'live'))->filter('[is_privacy *= true]')->get();
        if(array_key_exists(0, $imprint) && $imprint) {
            $result['legalnotice'] = [
                'title' => $imprint[0]->getProperty('title'),
                'uri' => $this->getNodeUri($imprint[0])
            ];
        } else {
            $result['legalnotice'] = [
                'title' => false,
                'uri' => false
            ];
        }
        if(array_key_exists(0, $privacy) && $privacy) {
            $result['dataprivacy'] = [
                'title' => $privacy[0]->getProperty('title'),
                'uri' => $this->getNodeUri($privacy[0])
            ];
        } else {
            $result['dataprivacy'] = [
                'title' => false,
                'uri' => false
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
