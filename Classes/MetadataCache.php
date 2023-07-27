<?php
namespace NeosRulez\CookieOptIn;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Configuration\Exception\InvalidConfigurationException;
use Neos\ContentRepository\Domain\Model\Workspace;
use Neos\ContentRepository\Domain\Model\NodeInterface;
use Neos\Flow\Cache\CacheManager;

class MetadataCache
{

    /**
     * @Flow\Inject
     * @var CacheManager
     */
    protected $cacheManager;

    /**
     * @param NodeInterface $node
     * @param Workspace $targetWorkspace
     * @return void
     * @throws InvalidConfigurationException
     */
    public function flushMetadataCache(NodeInterface $node, Workspace $targetWorkspace): void
    {
        $this->cacheManager->getCache('NeosRulez_CookieOptIn_Cache')->flush();
    }

}
