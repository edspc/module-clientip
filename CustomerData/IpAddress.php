<?php

namespace Edspc\ClientIP\CustomerData;

use Magento\Customer\CustomerData\SectionSourceInterface;
use Magento\Framework\HTTP\PhpEnvironment\RemoteAddress;

class IpAddress implements SectionSourceInterface
{
    /**
     * @var RemoteAddress
     */
    private $remoteAddress;

    public function __construct(
        RemoteAddress $remoteAddress
    ) {
        $this->remoteAddress = $remoteAddress;
    }

    public function getSectionData()
    {
        return [
            'primary' => $this->remoteAddress->getRemoteAddress()
        ];
    }
}
