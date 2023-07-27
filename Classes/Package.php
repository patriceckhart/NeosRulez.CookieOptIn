<?php
namespace NeosRulez\CookieOptIn;

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Package\Package as BasePackage;
use Neos\Flow\Core\Bootstrap;
use Neos\ContentRepository\Domain\Model\Workspace;

class Package extends BasePackage
{

    /**
     * @param Bootstrap $bootstrap The current bootstrap
     * @return void
     */
    public function boot(Bootstrap $bootstrap): void
    {
        $dispatcher = $bootstrap->getSignalSlotDispatcher();
        $dispatcher->connect(Workspace::class, 'afterNodePublishing', MetadataCache::class, 'flushMetadataCache');
    }

}
