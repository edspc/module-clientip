<?php

namespace Edspc\ClientIP\Block;

class ClientIP extends \Magento\Framework\View\Element\Template
{
    /**
     * @var \Magento\Framework\HTTP\PhpEnvironment\RemoteAddress
     */
    private $remoteAddress;

    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Magento\Framework\HTTP\PhpEnvironment\RemoteAddress $remoteAddress,
        array $data = []
    ) {
        parent::__construct($context, $data);
        $this->remoteAddress = $remoteAddress;
    }

    /**
     * @return string
     */
    public function getIP()
    {
        return $this->remoteAddress->getRemoteAddress();
    }
}
