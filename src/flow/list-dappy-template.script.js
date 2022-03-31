export const LIST_DAPP_TEMPLATES = '
            import DappyContract from 0xDappy
            pub fun main(): {Uint32: DappyContract.Template} {
              return DappyContract.listTemplates()
            }'
            
