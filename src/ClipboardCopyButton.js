define(['react', 'react-dom', '@emotion/css', './html'], (
    { createElement, useState, useRef },
    { render },
    { css, cx },
    html,
) => {
    const _ClipboardCopyButtonContainer = css`
      position: absolute;
      top: 0;
      right: 0;

      .clipboard-copy-button {
        position: relative;
        box-sizing: border-box;
        margin: 8px;
        height: 36px;
        width: 34px;
        user-select: none;
        cursor: pointer;
        border: 1px solid rgba(27, 31, 36, 0.15);
        border-radius: 6px;
        box-shadow: rgba(27, 31, 36, 0.04) 0 1px 0 0, rgba(255, 255, 255, 0.25) 0 1px 0 0 inset;
        color: #57606a;
        transition: .2s cubic-bezier(0.3, 0, 0.5, 1);
        transition-property: color, background-color, border-color;
        vertical-align: middle;
        padding: 7px 8px;
        background-color: #f6f8fa;

        :hover {
          background-color: #f3f4f6;
        }

        :active {
          background-color: #ebecf0;
        }


        &.check {
          color: #2da44e !important;
          border-color: #2da44e;

          ::before {
            width: 0;
            height: 0;
            border: 6px solid transparent;
            border-left-color: #25292f;
            content: '';
            position: absolute;
            top: 50%;
            bottom: 50%;
            left: -7px;
            margin-top: -6px;
          }

          ::after {
            content: 'copied!';
            font-size: .75rem;
            position: absolute;
            right: 100%;
            bottom: 50%;
            margin-right: 6px;
            background-color: #25292f;
            border-radius: 6px;
            transform: translateY(50%);
            padding: .5em .75em;
            color: #fff;
            text-align: center;
          }

          > svg.check {
            fill: #1a7f37;
          }
        }
      }

      &.hidden, .hidden {
        display: none;
      }
    `

    function ClipboardCopyButton(props = {}) {

        const [check, setCheck] = useState(false)
        const checkTimerRef = useRef()

        function handleClick() {
            setCheck(true)
            clearTimeout(checkTimerRef.current)
            checkTimerRef.current = setTimeout(() => {
                setCheck(false)
            }, 2000)

            if (typeof props.onClick === 'function') {
                props.onClick()
            }
        }

        return html`
            <div class=${cx('clipboard-copy-button', check ? 'check' : '')} onClick=${handleClick}>
                <svg class=${cx('copy', check ? 'hidden' : '')} aria-hidden="true" height="16"
                     viewBox="0 0 16 16" width="16"
                     data-view-component="true">
                    <path fill-rule="evenodd"
                          d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path>
                    <path fill-rule="evenodd"
                          d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
                </svg>
                <svg class=${cx('check', check ? '' : 'hidden')} aria-hidden="true" height="16"
                     viewBox="0 0 16 16" width="16"
                     data-view-component="true">
                    <path fill-rule="evenodd"
                          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                </svg>
            </div>
        `
    }

    return function renderClipboardCopyButton(container, props = {}) {
        const divRef = document.createElement('div')
        divRef.classList.add(_ClipboardCopyButtonContainer)
        divRef.classList.add('hidden')
        container.addEventListener('mouseenter', () => {
            divRef.classList.remove('hidden')
        })
        container.addEventListener('mouseleave', () => {
            divRef.classList.add('hidden')
        })
        container.appendChild(divRef)
        return render(createElement(ClipboardCopyButton, props), divRef)
    }
})

