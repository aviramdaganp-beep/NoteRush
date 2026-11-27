/* Approved Mia flight lab v14; Note Rush v71. Fixed half speed. */
(function(global){
'use strict';
const TAU=2*Math.PI, RATE=.5, MASTER="<g id=\"boost-wind\" opacity=\"0\" pointer-events=\"none\" aria-hidden=\"true\"><path id=\"wind-0\" d=\"M0 0 Q41.3 -3 118 0 Q41.3 3 0 0Z\" fill=\"#fff4d8\" opacity=\"0\"/><path id=\"wind-1\" d=\"M0 0 Q28 -2.4 80 0 Q28 2.4 0 0Z\" fill=\"#d7f5f2\" opacity=\"0\"/><path id=\"wind-2\" d=\"M0 0 Q52.5 -3.5999999999999996 150 0 Q52.5 3.5999999999999996 0 0Z\" fill=\"#d7f5f2\" opacity=\"0\"/><path id=\"wind-3\" d=\"M0 0 Q36.05 -3 103 0 Q36.05 3 0 0Z\" fill=\"#fff4d8\" opacity=\"0\"/><path id=\"wind-4\" d=\"M0 0 Q57.74999999999999 -4.2 165 0 Q57.74999999999999 4.2 0 0Z\" fill=\"#d7f5f2\" opacity=\"0\"/><path id=\"wind-5\" d=\"M0 0 Q36.4 -3 104 0 Q36.4 3 0 0Z\" fill=\"#d7f5f2\" opacity=\"0\"/><path id=\"wind-6\" d=\"M0 0 Q49 -3.5999999999999996 140 0 Q49 3.5999999999999996 0 0Z\" fill=\"#fff4d8\" opacity=\"0\"/><path id=\"wind-7\" d=\"M0 0 Q33.25 -2.4 95 0 Q33.25 2.4 0 0Z\" fill=\"#d7f5f2\" opacity=\"0\"/><path id=\"wind-8\" d=\"M0 0 Q54.599999999999994 -3.5999999999999996 156 0 Q54.599999999999994 3.5999999999999996 0 0Z\" fill=\"#d7f5f2\" opacity=\"0\"/><path id=\"wind-9\" d=\"M0 0 Q31.499999999999996 -3 90 0 Q31.499999999999996 3 0 0Z\" fill=\"#fff4d8\" opacity=\"0\"/><path id=\"wind-10\" d=\"M0 0 Q4.199999999999999 -3 12 0 Q4.199999999999999 3 0 0Z\" fill=\"#d7f5f2\" opacity=\"0\"/><path id=\"wind-11\" d=\"M0 0 Q3.15 -2.4 9 0 Q3.15 2.4 0 0Z\" fill=\"#d7f5f2\" opacity=\"0\"/><path id=\"wind-12\" d=\"M0 0 Q5.25 -3 15 0 Q5.25 3 0 0Z\" fill=\"#fff4d8\" opacity=\"0\"/><path id=\"wind-13\" d=\"M0 0 Q3.8499999999999996 -2.4 11 0 Q3.8499999999999996 2.4 0 0Z\" fill=\"#d7f5f2\" opacity=\"0\"/></g><g id=\"flight-body\"><g id=\"scarf-streamers\"><path data-motion=\"scarf\" id=\"scarf-curve-0\" d=\"M591 303 C556 291 526 268 493 223 C468 184 463 137 413 121 C377 109 345 120 319 145 C362 143 388 170 402 191 C376 213 351 190 321 177 C270 151 230 151 185 192 C237 174 248 214 287 239 C325 268 366 263 394 254 C438 244 464 286 506 294 C540 297 560 308 586 322 Z\" fill=\"#d02f3b\"/><clipPath id=\"scarf-streamers-shadow-clip\" clipPathUnits=\"userSpaceOnUse\"><path data-motion=\"scarf\" id=\"scarf-curve-1\" d=\"M591 303 C556 291 526 268 493 223 C468 184 463 137 413 121 C377 109 345 120 319 145 C362 143 388 170 402 191 C376 213 351 190 321 177 C270 151 230 151 185 192 C237 174 248 214 287 239 C325 268 366 263 394 254 C438 244 464 286 506 294 C540 297 560 308 586 322 Z\"/></clipPath><g clip-path=\"url(#scarf-streamers-shadow-clip)\"><path data-motion=\"scarf\" id=\"scarf-curve-2\" d=\"M185 192 C230 153 269 151 321 177 C351 190 376 213 402 191 C381 225 345 240 314 236 C276 230 246 174 185 192 Z\" fill=\"#ae2530\"/><path data-motion=\"scarf\" id=\"scarf-curve-3\" d=\"M314 250 C368 253 413 210 457 227 C501 243 521 286 586 309 L591 321 C555 303 539 297 506 294 C464 286 438 244 394 254 C366 263 342 269 314 250 Z\" fill=\"#ae2530\"/></g></g><g id=\"goose-feet\"><path d=\"M421 648 C401 641 381 651 350 657 C328 660 302 669 297 682 C292 692 307 696 330 690 C310 702 298 711 305 718 C321 733 367 702 391 685 L433 664Z\" fill=\"#f68b2c\"/><path d=\"M457 673 C439 667 417 676 395 687 C380 693 366 704 375 712 Q381 717 392 715 C381 723 382 731 392 732 C415 732 451 706 474 690Z\" fill=\"#e36e24\"/></g><g id=\"far-wing\"><path d=\"M423 554 C385 552 330 564 278 577 C263 581 256 588 265 595 C280 606 301 609 320 605 C298 614 302 623 314 628 C333 636 351 632 372 623 C354 637 361 645 378 642 C410 636 444 613 462 587 Z\" fill=\"#b7a5b8\" data-motion=\"far-wing\" id=\"far-wing-curve-0\"/><path d=\"M420 554 C378 555 322 566 278 577 C263 581 256 588 265 595 Q288 609 320 597 C352 586 386 578 420 570Z\" fill=\"#f9eadc\" data-motion=\"far-wing\" id=\"far-wing-curve-1\"/></g><g id=\"goose-body\"><path d=\"M364 555 C393 490 432 451 487 439 C530 429 587 445 644 455 C710 467 749 445 774 403 C790 376 804 342 827 311 C859 269 905 250 949 267 C976 277 993 296 1008 316 C1025 337 1038 350 1039 367 C1042 390 1015 406 977 416 C943 421 923 427 902 453 C865 491 846 524 810 559 C775 599 728 657 664 688 C607 716 557 716 503 700 C450 685 403 663 378 630 C356 607 352 581 364 555Z\" fill=\"#c7b6c4\"/><path d=\"M364 555 C393 490 432 451 487 439 C530 429 587 445 644 455 C710 467 749 445 774 403 C790 376 804 342 827 311 C859 269 905 250 949 267 C976 277 993 296 1008 316 C1025 337 1038 350 1039 367 C1042 390 1015 406 977 416 C943 421 923 427 902 453 C865 491 829 535 791 563 C759 585 727 603 695 617 C681 623 677 632 689 634 C704 635 708 632 716 631 C682 654 650 672 614 676 C596 678 597 671 614 657 C588 670 570 675 550 672 C539 669 553 660 568 649 C536 660 509 663 482 654 C466 651 448 645 435 633 C455 636 480 631 493 624 C455 630 425 619 402 602 C380 587 367 571 364 555 Z\" fill=\"#f9eadc\"/><path d=\"M735 447 C752 437 765 419 774 403 C790 376 804 342 827 311 C859 269 905 250 949 267 C976 277 993 296 1008 316 C984 299 967 300 946 308 C917 319 898 343 881 368 C864 398 846 435 813 445 C788 454 766 448 735 447Z\" fill=\"#794323\"/><clipPath id=\"goose-cap-shadow-clip\" clipPathUnits=\"userSpaceOnUse\"><path d=\"M735 447 C752 437 765 419 774 403 C790 376 804 342 827 311 C859 269 905 250 949 267 C976 277 993 296 1008 316 C984 299 967 300 946 308 C917 319 898 343 881 368 C864 398 846 435 813 445 C788 454 766 448 735 447Z\"/></clipPath><g clip-path=\"url(#goose-cap-shadow-clip)\"><path d=\"M877 299 C904 274 930 268 949 273 C976 282 991 303 1007 320 C980 303 964 302 946 308 C925 316 906 329 890 347Z\" fill=\"#542c1d\"/></g><g transform=\"translate(887 295) rotate(-29)\"><ellipse cx=\"0\" cy=\"4\" rx=\"50\" ry=\"36\" fill=\"#542c1d\"/><ellipse cx=\"0\" cy=\"0\" rx=\"48\" ry=\"34\" fill=\"#f5b72b\"/><ellipse cx=\"0\" cy=\"-2\" rx=\"35.04\" ry=\"22.78\" fill=\"#719dc4\"/><ellipse cx=\"2\" cy=\"-5\" rx=\"8.16\" ry=\"18.02\" fill=\"#b5d6e8\" transform=\"rotate(32 2 -5)\"/></g><path d=\"M917 365 C917 350 929 338 942 338 C956 338 967 347 970 358 Q970 364 965 362 C957 350 948 346 940 350 C931 353 926 361 923 368 Q918 374 917 365Z\" fill=\"#171416\"/><ellipse cx=\"914\" cy=\"387\" rx=\"19\" ry=\"10\" fill=\"#f9c3a9\" transform=\"rotate(-6 914 387)\"/><path d=\"M998 350 C1004 337 1009 329 1023 330 C1048 339 1072 326 1089 329 C1101 331 1103 342 1096 353 C1086 367 1059 382 1038 392 C1049 403 1061 417 1064 430 C1069 444 1059 449 1044 443 C1019 433 992 418 974 401 C965 392 966 384 974 377 C985 368 991 360 998 350Z\" fill=\"#f68b2c\"/><path d=\"M978 390 C1003 385 1041 356 1074 345 C1088 340 1099 341 1093 350 C1079 370 1054 382 1033 392 C1045 404 1059 423 1059 435 C1056 441 1044 434 1036 430 C1012 416 995 404 978 390Z\" fill=\"#9e2e23\"/><path d=\"M981 391 C998 388 1018 396 1030 408 Q1047 423 1057 436 C1049 443 1023 427 1007 418 C996 410 989 400 981 391Z\" fill=\"#d34a2c\"/><ellipse cx=\"1015\" cy=\"347\" rx=\"5\" ry=\"3\" fill=\"#c45b22\" transform=\"rotate(12 1015 347)\"/></g><g id=\"harness\"><path d=\"M422 449 C432 430 456 424 484 430 C530 438 562 454 610 483 L631 518 C579 487 529 475 486 472 L436 492 Z\" fill=\"#794323\"/><path d=\"M420 452 C433 436 459 431 479 437 C528 443 572 468 613 494 L617 505 C550 472 496 453 455 453 Z\" fill=\"#542c1d\"/><path d=\"M413 623 C468 635 542 600 593 537 C610 516 624 502 638 508 L656 529 C607 585 559 626 507 638 C465 649 427 639 413 623Z\" fill=\"#794323\"/><path d=\"M613 502 C655 532 696 554 745 562 C773 566 792 557 812 545 L801 571 C784 597 751 608 724 600 C673 586 635 553 607 527Z\" fill=\"#794323\"/><path d=\"M735 434 C702 449 685 481 687 512 C690 548 709 574 740 585 L759 563 C737 552 721 528 720 505 C718 482 733 459 759 446Z\" fill=\"#794323\"/><path d=\"M477 435 C527 423 565 428 605 438 C652 452 694 452 733 442 C757 436 775 422 787 411 L801 428 C782 452 762 464 736 471 C681 485 638 469 601 460 C556 448 520 447 485 455Z\" fill=\"#794323\"/><g transform=\"translate(820 383) rotate(-1)\"><rect x=\"-21.5\" y=\"-22.5\" width=\"43\" height=\"45\" rx=\"4\" fill=\"#f5b72b\"/><rect x=\"-15.5\" y=\"-16.5\" width=\"31\" height=\"33\" rx=\"1.5\" fill=\"#542c1d\"/></g></g><g id=\"mia-tail\"><path data-motion=\"tail\" id=\"tail-curve-0\" d=\"M485 411 C447 392 418 358 384 331 C351 305 319 269 287 262 C272 258 256 261 250 270 C247 275 251 277 259 275 C250 284 247 296 253 300 C256 303 261 301 266 296 C254 310 255 321 262 322 Q269 324 276 317 C268 330 272 341 284 344 C298 350 312 347 327 347 C370 361 414 400 457 427 C470 433 481 425 485 411Z\" fill=\"#a69a89\"/><clipPath id=\"tail-clip\"><path data-motion=\"tail\" id=\"tail-curve-1\" d=\"M485 411 C447 392 418 358 384 331 C351 305 319 269 287 262 C272 258 256 261 250 270 C247 275 251 277 259 275 C250 284 247 296 253 300 C256 303 261 301 266 296 C254 310 255 321 262 322 Q269 324 276 317 C268 330 272 341 284 344 C298 350 312 347 327 347 C370 361 414 400 457 427 C470 433 481 425 485 411Z\"/></clipPath><g clip-path=\"url(#tail-clip)\"><path data-motion=\"tail\" id=\"tail-curve-2\" d=\"M250 253 L317 253 Q329 262 342 273 C326 280 320 290 320 306 C320 325 333 338 339 351 L250 358Z\" fill=\"#b09d88\"/><path data-motion=\"tail\" id=\"tail-curve-3\" d=\"M244 253 L284 253 Q300 265 300 286 C286 301 286 327 298 350 L244 358Z\" fill=\"#645e55\"/><path data-motion=\"tail\" id=\"tail-curve-4\" d=\"M341 273 C355 280 370 293 386 308 C366 323 353 344 355 367 L321 351 C310 332 306 306 319 294 Q328 279 341 273Z\" fill=\"#696057\"/><path data-motion=\"tail\" id=\"tail-curve-5\" d=\"M404 325 C413 333 427 344 437 354 C420 369 416 387 414 401 L382 379 C383 359 390 339 404 325Z\" fill=\"#786d60\"/><path data-motion=\"tail\" id=\"tail-curve-6\" d=\"M451 371 L481 398 L487 430 L454 435 L439 420 C436 404 443 383 451 371Z\" fill=\"#6e665b\"/></g></g><g id=\"mia-body\"><path d=\"M543 342 C562 322 590 317 625 329 C656 336 681 348 700 370 C711 386 718 403 731 415 C746 432 740 451 717 454 C693 461 681 452 664 445 C647 456 631 454 616 448 C589 459 568 449 553 438 C532 419 528 373 543 342Z\" fill=\"#a69a89\"/><clipPath id=\"body-clip\"><path d=\"M543 342 C562 322 590 317 625 329 C656 336 681 348 700 370 C711 386 718 403 731 415 C746 432 740 451 717 454 C693 461 681 452 664 445 C647 456 631 454 616 448 C589 459 568 449 553 438 C532 419 528 373 543 342Z\"/></clipPath><g clip-path=\"url(#body-clip)\"><path d=\"M537 326 C565 318 591 325 599 344 C604 359 589 369 594 386 C601 405 588 420 567 428 L530 418Z\" fill=\"#c7a485\"/><path d=\"M577 330 Q622 313 654 346 L643 361 C617 353 593 355 579 374 Q566 364 577 330Z\" fill=\"#73685c\"/><path d=\"M622 352 Q649 345 665 363 Q664 376 649 389 Q637 405 642 419 L612 422 Q602 401 613 383 Q623 369 622 352Z\" fill=\"#b99473\"/><path d=\"M595 393 C604 371 624 365 641 378 L645 391 C626 384 610 390 595 393Z\" fill=\"#73685c\"/><path d=\"M701 381 Q714 391 732 412 L744 429 L716 439 Q699 427 689 411Z\" fill=\"#c4a183\"/><path d=\"M655 347 Q691 352 705 377 L691 410 Q684 407 681 397 L674 407 Q669 402 669 390 L660 401 Q655 397 656 386 L648 393 Q646 378 655 347Z\" fill=\"#f6f1e8\"/><path d=\"M546 405 C562 401 572 412 579 427 L567 445 L546 438Z\" fill=\"#73685c\"/></g><path d=\"M557 341 Q574 331 583 337 C603 359 621 376 633 407 L618 416 C603 385 585 366 557 350Z\" fill=\"#794323\"/><path d=\"M694 364 Q711 365 716 374 C710 398 699 417 679 431 L666 418 C681 404 689 385 694 364Z\" fill=\"#542c1d\"/><path d=\"M574 410 C582 408 592 414 597 423 C603 433 609 435 620 435 C628 437 630 445 625 450 C617 459 600 458 588 453 C578 455 564 453 561 444 C556 434 563 417 574 410Z\" fill=\"#f6f1e8\"/><path d=\"M585 437 Q593 443 590 450 M598 438 Q605 444 602 452\" fill=\"none\" stroke=\"#aaa49a\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M632 407 C644 399 658 401 670 407 C680 416 681 426 699 430 C711 433 718 444 713 451 C707 463 692 463 679 459 C662 461 649 456 640 447 C631 439 620 419 632 407Z\" fill=\"#f6f1e8\"/><path d=\"M669 443 Q677 450 673 457 M684 443 Q692 451 688 459 M698 441 Q705 448 702 456\" fill=\"none\" stroke=\"#aaa49a\" stroke-width=\"2.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M728 405 C742 404 761 413 774 425 C784 432 787 443 780 449 C773 456 761 455 752 451 C741 456 729 451 723 443 C716 434 715 418 728 405Z\" fill=\"#f6f1e8\"/><path d=\"M751 436 Q759 443 755 450 M766 435 Q774 441 769 450\" fill=\"none\" stroke=\"#aaa49a\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></g><g id=\"satchel\"><path d=\"M492 323 C503 308 522 302 542 305 C562 309 579 323 599 322 C613 323 611 338 606 349 L579 405 C569 425 547 431 522 424 C496 416 465 404 465 382 C465 362 480 339 492 323Z\" fill=\"#542c1d\"/><path d=\"M490 326 C502 309 520 305 541 308 C561 312 579 325 596 325 C607 326 603 338 597 351 L572 398 C563 416 544 421 524 415 C499 408 469 398 469 381 C469 362 481 342 490 326Z\" fill=\"#96532c\"/><path d=\"M490 326 C502 309 520 305 541 308 C561 312 579 325 596 325 C584 325 575 334 570 346 C563 361 552 374 538 371 C521 365 501 357 486 347 Q483 337 490 326Z\" fill=\"#96532c\"/><path d=\"M486 345 C503 355 521 366 539 371 C553 375 563 361 570 346 Q581 322 596 325\" fill=\"none\" stroke=\"#542c1d\" stroke-width=\"3.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><g transform=\"translate(520 361) rotate(20)\"><rect x=\"-17.5\" y=\"-15.0\" width=\"35\" height=\"30\" rx=\"4\" fill=\"#f5b72b\"/><rect x=\"-11.5\" y=\"-9.0\" width=\"23\" height=\"18\" rx=\"1.5\" fill=\"#542c1d\"/></g></g><g id=\"mia-head\"><path data-ear=\"true\" id=\"boost-ear-0\" d=\"M612 202 C575 182 550 144 553 99 C553 66 564 31 580 20 Q587 13 600 21 C641 43 667 62 699 101 L714 113 C714 72 716 39 731 15 Q738 8 747 16 C775 46 790 70 800 103 C810 118 821 142 825 162 C832 180 834 198 830 220 L842 238 C853 252 844 272 828 287 C802 310 777 320 738 318 C701 316 672 298 646 285 C622 271 591 262 568 246 L584 241 Q568 234 557 219 L581 222 Q553 205 541 186 Q535 179 547 181 L569 189 Q547 163 541 144 Q536 136 546 140 L571 156Z\" fill=\"#817467\"/><clipPath id=\"mia-ear-fur-clip\" clipPathUnits=\"userSpaceOnUse\"><path data-ear=\"true\" id=\"boost-ear-1\" d=\"M612 202 C575 182 550 144 553 99 C553 66 564 31 580 20 Q587 13 600 21 C641 43 667 62 699 101 L714 113 C714 72 716 39 731 15 Q738 8 747 16 C775 46 790 70 800 103 C810 118 821 142 825 162 C832 180 834 198 830 220 L842 238 C853 252 844 272 828 287 C802 310 777 320 738 318 C701 316 672 298 646 285 C622 271 591 262 568 246 L584 241 Q568 234 557 219 L581 222 Q553 205 541 186 Q535 179 547 181 L569 189 Q547 163 541 144 Q536 136 546 140 L571 156Z\"/></clipPath><g id=\"mia-ear-fur-shading\" clip-path=\"url(#mia-ear-fur-clip)\"><path data-ear=\"true\" id=\"boost-ear-2\" d=\"M544 85 C545 132 571 164 609 181 Q636 195 650 215 L620 238 C583 226 548 204 530 164 Z\" fill=\"#6b625b\"/><path data-ear=\"true\" id=\"boost-ear-3\" d=\"M580 19 C608 20 660 57 698 102 L681 119 C654 90 628 61 594 44 Q580 35 565 47 Z\" fill=\"#a58b76\"/><path data-ear=\"true\" id=\"boost-ear-4\" d=\"M729 13 Q755 22 781 63 Q797 89 802 111 L784 116 Q765 65 732 31 Z\" fill=\"#a58b76\"/></g><path data-ear=\"true\" id=\"boost-ear-5\" d=\"M570 94 C572 66 579 40 589 31 C606 36 636 54 657 73 C676 89 690 107 696 119 L643 181 C605 166 574 134 570 94Z\" fill=\"#e9a79e\"/><path data-ear=\"true\" id=\"boost-ear-6\" d=\"M615 122 C622 117 630 121 641 130 Q638 112 646 112 C657 113 668 129 674 139 L646 177 Q626 165 617 153 Q607 145 620 144 Q609 134 615 122Z\" fill=\"#f6f1e8\"/><path data-ear=\"true\" id=\"boost-ear-7\" d=\"M731 29 C753 50 773 78 789 109 L748 137 C737 108 726 56 731 29Z\" fill=\"#e9a79e\"/><path data-ear=\"true\" id=\"boost-ear-8\" d=\"M747 104 Q745 84 752 82 Q761 83 768 98 Q774 88 778 94 L787 113 L753 129Z\" fill=\"#f6f1e8\"/><path d=\"M619 222 C631 177 660 143 702 135 C735 126 767 137 793 150 C816 163 830 183 834 208 Q836 219 832 230 C844 232 851 239 853 244 Q848 247 844 249 Q856 252 850 259 L843 263 Q850 266 843 273 C826 297 795 316 759 316 C727 316 700 307 681 293 L661 300 Q645 302 635 294 L646 282 Q627 291 613 287 Q604 285 617 275 L635 263 Q605 270 592 260 Q585 256 597 249 L616 239 Q598 237 594 225 Q602 221 619 222Z\" fill=\"#9c8270\"/><path d=\"M619 222 C644 223 666 232 686 233 C706 235 730 244 752 237 C774 229 786 230 799 232 Q816 225 833 227 Q841 231 851 240 L843 248 Q854 251 850 258 L842 263 Q850 267 842 274 C821 300 790 316 759 316 C727 316 701 306 680 292 L662 300 Q646 302 635 294 L646 282 Q626 290 613 287 Q604 285 617 275 L635 263 Q605 270 592 260 Q585 256 597 249 L616 239 Q597 237 594 225 Q606 223 619 222Z\" fill=\"#f6f1e8\"/><clipPath id=\"mia-fur-face-clip\" clipPathUnits=\"userSpaceOnUse\"><path d=\"M619 222 C631 177 660 143 702 135 C735 126 767 137 793 150 C816 163 830 183 834 208 Q836 219 832 230 C844 232 851 239 853 244 Q848 247 844 249 Q856 252 850 259 L843 263 Q850 266 843 273 C826 297 795 316 759 316 C727 316 700 307 681 293 L661 300 Q645 302 635 294 L646 282 Q627 291 613 287 Q604 285 617 275 L635 263 Q605 270 592 260 Q585 256 597 249 L616 239 Q598 237 594 225 Q602 221 619 222Z\"/></clipPath><g clip-path=\"url(#mia-fur-face-clip)\" id=\"mia-fur-brown-patches\"><path d=\"M620 154 C652 140 681 138 704 151 C682 164 661 189 659 207 Q662 220 674 232 L629 228 Q613 195 620 154Z\" fill=\"#807165\"/><path d=\"M681 155 C702 142 723 139 741 145 Q732 155 714 163 Q696 173 683 192 Q673 186 681 155Z\" fill=\"#b69a7d\"/><path d=\"M741 141 C769 142 805 152 829 176 L844 217 Q826 225 809 222 C798 218 790 207 789 195 Q788 180 777 168 C765 157 750 154 741 141Z\" fill=\"#bda084\"/><path d=\"M635 189 Q656 178 673 187 Q660 195 638 202Z\" fill=\"#6c635a\"/><path d=\"M629 210 Q651 201 668 210 Q659 219 633 224Z\" fill=\"#6c635a\"/><path d=\"M696 151 Q710 145 723 145 Q718 156 706 173 Q702 160 696 151Z\" fill=\"#75675a\"/><path d=\"M758 150 Q772 151 781 158 Q779 168 774 176 Q766 163 758 150Z\" fill=\"#75675a\"/><path d=\"M610 246 Q625 234 650 240 Q639 249 623 252 Q616 251 610 246Z\" fill=\"#d7bc9c\"/></g><path d=\"M661 253 Q688 236 717 249 Q694 262 675 264 Q666 263 661 253Z\" fill=\"#91867a\"/><path d=\"M700 275 Q723 249 748 254 Q730 274 713 278 Q705 279 700 275Z\" fill=\"#b79b7f\"/><g id=\"open-eye-near\"><path d=\"M698 210 Q688 212 685 205 Q693 210 701 198 C710 180 727 170 744 172 C763 175 778 190 779 208 Q778 230 759 239 C738 245 713 239 702 224 Q696 219 698 210Z\" fill=\"#171416\"/><path d=\"M702 211 C702 191 724 176 743 177 C762 179 774 193 775 210 Q774 231 756 236 C738 243 716 236 706 222 Q703 217 702 211Z\" fill=\"#fff7ec\"/><clipPath id=\"mia-eye-near-clip\" clipPathUnits=\"userSpaceOnUse\"><path d=\"M702 211 C702 191 724 176 743 177 C762 179 774 193 775 210 Q774 231 756 236 C738 243 716 236 706 222 Q703 217 702 211Z\"/></clipPath><g clip-path=\"url(#mia-eye-near-clip)\"><ellipse cx=\"747\" cy=\"211\" rx=\"22\" ry=\"29\" fill=\"#c9bb58\" transform=\"rotate(-14 747 211)\"/><ellipse cx=\"753\" cy=\"207\" rx=\"11\" ry=\"21\" fill=\"#171416\" transform=\"rotate(-14 753 207)\"/><ellipse cx=\"742\" cy=\"194\" rx=\"4\" ry=\"5\" fill=\"#fff7ec\"/></g></g><path id=\"closed-eye-near\" d=\"M700 213 C721 200 749 198 775 212\" fill=\"none\" stroke=\"#171416\" stroke-width=\"5.5\" stroke-linecap=\"round\" opacity=\"0\"/><g id=\"open-eye-far\"><path d=\"M807 209 C805 189 814 176 824 177 C834 177 841 190 842 205 Q843 219 836 228 Q832 233 826 231 C814 231 808 222 807 209Z\" fill=\"#171416\"/><path d=\"M810 209 C808 191 815 179 824 180 C834 181 839 194 839 209 Q839 222 830 228 Q816 231 810 209Z\" fill=\"#fff7ec\"/><clipPath id=\"mia-eye-far-clip\" clipPathUnits=\"userSpaceOnUse\"><path d=\"M810 209 C808 191 815 179 824 180 C834 181 839 194 839 209 Q839 222 830 228 Q816 231 810 209Z\"/></clipPath><g clip-path=\"url(#mia-eye-far-clip)\"><ellipse cx=\"825\" cy=\"209\" rx=\"10\" ry=\"21\" fill=\"#c9bb58\" transform=\"rotate(-9 825 209)\"/><ellipse cx=\"828\" cy=\"205\" rx=\"5\" ry=\"15\" fill=\"#171416\" transform=\"rotate(-9 828 205)\"/><ellipse cx=\"820\" cy=\"194\" rx=\"2.6\" ry=\"3.6\" fill=\"#fff7ec\"/></g></g><path id=\"closed-eye-far\" d=\"M809 211 Q824 198 838 210\" fill=\"none\" stroke=\"#171416\" stroke-width=\"4.3\" stroke-linecap=\"round\" opacity=\"0\"/><!--DIVE_MASK--><path d=\"M806 231 Q812 226 823 229 Q828 230 823 235 L819 240 Q812 239 806 231Z\" fill=\"#e9a79e\"/><path d=\"M785 250 Q795 258 806 255 Q816 253 821 246 C826 265 817 281 807 286 C793 292 780 275 782 258Z\" fill=\"#9e2e23\"/><path d=\"M785 268 Q797 263 807 285 Q799 291 791 282Z\" fill=\"#e65a55\"/><path d=\"M619 224 C628 187 654 149 681 128 C708 104 739 102 766 110 C792 116 816 135 825 155 L827 169 C809 151 793 144 772 138 C734 129 703 140 675 165 C655 183 644 205 637 228Z\" fill=\"#794323\"/><path d=\"M664 150 C691 117 727 104 766 110 C791 116 817 136 825 155 L827 169 C804 151 792 144 773 138 C738 129 709 138 680 158Z\" fill=\"#542c1d\"/><g transform=\"translate(716 123) rotate(-15)\"><ellipse cx=\"0\" cy=\"4\" rx=\"48\" ry=\"34\" fill=\"#542c1d\"/><ellipse cx=\"0\" cy=\"0\" rx=\"46\" ry=\"32\" fill=\"#f5b72b\"/><ellipse cx=\"0\" cy=\"-2\" rx=\"33.58\" ry=\"21.44\" fill=\"#719dc4\"/><ellipse cx=\"2\" cy=\"-5\" rx=\"7.82\" ry=\"16.96\" fill=\"#b5d6e8\" transform=\"rotate(32 2 -5)\"/></g><g transform=\"translate(803 121) rotate(36)\"><ellipse cx=\"0\" cy=\"4\" rx=\"36\" ry=\"20\" fill=\"#542c1d\"/><ellipse cx=\"0\" cy=\"0\" rx=\"34\" ry=\"18\" fill=\"#f5b72b\"/><ellipse cx=\"0\" cy=\"-2\" rx=\"24.82\" ry=\"12.06\" fill=\"#719dc4\"/><ellipse cx=\"2\" cy=\"-5\" rx=\"5.78\" ry=\"9.540000000000001\" fill=\"#b5d6e8\" transform=\"rotate(32 2 -5)\"/></g></g><g id=\"scarf-collar\"><path d=\"M590 289 C609 283 627 289 650 299 C672 309 704 314 731 313 C749 309 763 315 766 326 C768 339 757 347 741 346 C758 358 754 370 741 373 C723 376 705 364 692 355 C667 351 644 341 622 329 C603 322 591 308 590 289Z\" fill=\"#d02f3b\"/><clipPath id=\"scarf-collar-shadow-clip\" clipPathUnits=\"userSpaceOnUse\"><path d=\"M590 289 C609 283 627 289 650 299 C672 309 704 314 731 313 C749 309 763 315 766 326 C768 339 757 347 741 346 C758 358 754 370 741 373 C723 376 705 364 692 355 C667 351 644 341 622 329 C603 322 591 308 590 289Z\"/></clipPath><g clip-path=\"url(#scarf-collar-shadow-clip)\"><path d=\"M594 295 C622 300 650 321 680 329 C703 336 724 342 741 346 C720 347 706 344 689 339 C655 337 619 315 594 295Z\" fill=\"#ae2530\"/><path d=\"M711 345 Q735 345 753 338 Q751 346 741 346 Q750 354 751 359 C735 355 723 352 711 345Z\" fill=\"#ae2530\"/></g></g><g id=\"wing-root-strap\"><path d=\"M408 627 C462 633 521 600 563 552 C587 525 602 502 609 491 L633 511 C604 559 553 609 506 630 C467 647 435 644 408 627Z\" fill=\"#794323\"/></g><g id=\"near-wing\"><path d=\"M600 516 C585 475 524 455 451 441 C377 424 319 405 259 367 C208 335 171 289 150 250 C143 237 136 229 132 235 C121 247 124 279 139 311 C113 296 89 276 81 292 C71 315 85 350 125 382 C102 378 86 376 93 397 C101 429 134 450 166 464 C146 462 133 468 148 484 C171 509 214 518 250 519 C225 529 197 534 200 548 C207 571 250 577 283 570 C257 586 248 601 267 611 C296 625 328 611 356 594 C331 617 326 636 347 645 C376 658 406 639 430 621 C413 644 423 651 442 646 C477 639 510 609 538 577 C561 558 583 544 600 516Z\" fill=\"#b7a5b8\" data-motion=\"near-wing\" id=\"near-wing-curve-0\"/><clipPath id=\"wing-clip\"><path d=\"M600 516 C585 475 524 455 451 441 C377 424 319 405 259 367 C208 335 171 289 150 250 C143 237 136 229 132 235 C121 247 124 279 139 311 C113 296 89 276 81 292 C71 315 85 350 125 382 C102 378 86 376 93 397 C101 429 134 450 166 464 C146 462 133 468 148 484 C171 509 214 518 250 519 C225 529 197 534 200 548 C207 571 250 577 283 570 C257 586 248 601 267 611 C296 625 328 611 356 594 C331 617 326 636 347 645 C376 658 406 639 430 621 C413 644 423 651 442 646 C477 639 510 609 538 577 C561 558 583 544 600 516Z\" data-motion=\"near-wing\" id=\"near-wing-curve-1\"/></clipPath><g clip-path=\"url(#wing-clip)\"><path d=\"M93 389 C138 438 201 468 250 485 C289 502 335 522 402 526 C453 530 500 518 549 511 L600 516 C556 583 509 623 445 648 L360 668 L253 634 L173 572 L122 491Z\" fill=\"#a392a7\" data-motion=\"near-wing\" id=\"near-wing-curve-2\"/><path d=\"M132 235 C136 229 143 237 150 250 C171 289 208 335 259 367 C319 405 377 424 451 441 C524 455 585 475 600 516 C589 534 568 557 541 576 Q521 583 524 565 C502 588 478 604 459 604 C443 603 452 585 464 568 C436 595 410 614 387 615 C366 615 374 595 389 574 C357 600 328 613 309 609 C289 604 314 581 333 566 C297 586 266 592 254 579 C241 565 264 548 286 536 C244 549 217 548 202 536 C185 523 205 510 240 506 C203 495 172 477 153 455 C139 439 135 423 145 419 C157 413 173 428 193 435 C155 412 133 391 121 366 C105 330 126 342 164 362 C135 319 115 263 132 235Z\" fill=\"#f9eadc\" data-motion=\"near-wing\" id=\"near-wing-curve-3\"/><path d=\"M145 419 C157 413 173 428 193 435 C218 462 254 476 279 483 C245 491 219 480 196 465 C173 449 155 432 145 419Z\" fill=\"#c7b6c4\" data-motion=\"near-wing\" id=\"near-wing-curve-4\"/></g></g><g id=\"wing-strap\"><g transform=\"translate(625 503) rotate(39)\"><rect x=\"-23.0\" y=\"-23.5\" width=\"46\" height=\"47\" rx=\"4\" fill=\"#f5b72b\"/><rect x=\"-17.0\" y=\"-17.5\" width=\"34\" height=\"35\" rx=\"1.5\" fill=\"#542c1d\"/></g></g><g id=\"lantern\"><path d=\"M738 545 C752 551 752 566 737 573 C724 580 727 590 735 599\" fill=\"none\" stroke=\"#f5b72b\" stroke-width=\"9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M729 595 C718 590 712 604 720 619\" fill=\"none\" stroke=\"#f5b72b\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M703 612 C706 600 719 599 731 608 C736 611 738 616 738 622Z\" fill=\"#794323\"/><path d=\"M674 646 Q716 625 752 654 L731 717 Q696 739 664 711Z\" fill=\"#794323\"/><path d=\"M681 653 Q713 640 743 659 L725 708 Q695 718 674 705Z\" fill=\"#f5b72b\"/><path d=\"M700 655 Q719 650 730 660 L715 705 L688 703Z\" fill=\"#ffdf77\"/><path d=\"M691 649 L678 706 M736 655 L722 713\" fill=\"none\" stroke=\"#794323\" stroke-width=\"6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M664 644 C672 630 692 620 713 622 C736 624 753 640 762 655 Q766 664 758 668 C732 648 693 641 664 656 Q657 651 664 644Z\" fill=\"#542c1d\"/><path d=\"M662 641 C674 626 695 617 713 619 C736 621 751 634 759 652 C730 636 693 632 662 650Z\" fill=\"#794323\"/><ellipse cx=\"698\" cy=\"718\" rx=\"35\" ry=\"13\" fill=\"#542c1d\" transform=\"rotate(11 698 718)\"/></g></g>", DIVE_MASK="<g pointer-events=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M690 204 Q689 173 730 168 Q769 164 789 191 L803 190 Q808 169 824 169 Q846 169 851 198 Q855 225 839 236 Q820 243 807 224 L796 215 Q782 247 749 248 Q704 249 690 220Z\" fill=\"#9edbd6\" fill-opacity=\".12\" stroke=\"#36555c\" stroke-width=\"6\"/><path d=\"M690 204 Q689 173 730 168 Q769 164 789 191 L803 190 Q808 169 824 169 Q846 169 851 198 Q855 225 839 236 Q820 243 807 224 L796 215 Q782 247 749 248 Q704 249 690 220Z\" fill=\"none\" stroke=\"#7fc1bc\" stroke-width=\"2.4\"/><path d=\"M703 192 Q714 178 733 177 M817 179 Q829 176 836 185\" fill=\"none\" stroke=\"#e3f4eb\" stroke-width=\"3\"/></g>";
// A stationary directional light field in rig coordinates. The live
// silhouette is the alpha mask, so wings, scarf and tail move through the
// light rather than carrying painted highlights with them.
// Separate material lighting, in the same flat vector rig. Ambient
// multiply is baked into original paint colors, avoiding a full-body filter.
// The bounce itself has stationary, region-specific gradients with screen blend.
const REFLECT_PALETTE={
 monster:{color:'#a8d6a1',strength:.66,ambient:[.93,.95,.96]},
 lava:{color:'#ff9859',strength:.85,ambient:[.985,.95,.94]},
 slime:{color:'#c1f66a',strength:.76,ambient:[.97,.99,.955]},
 ocean:{color:'#64d0d8',strength:.72,ambient:[.92,.955,.978]}
};
function ambientMultiply(svg,ambient){
 return svg.replace(/\b(fill|stroke)="#([0-9a-f]{6})"/gi,(_,attr,hex)=>{
  const rgb=ambient.map((v,i)=>Math.round(parseInt(hex.slice(i*2,i*2+2),16)*v).toString(16).padStart(2,'0'));
  return attr+'="#'+rgb.join('')+'"';
 });
}
function reflect(master,world){
 const p=REFLECT_PALETTE[world];if(!p)return master;
 const bodyStart=master.indexOf('<g id="flight-body">'),lampStart=master.indexOf('<g id="lantern">',bodyStart);
 if(bodyStart<0||lampStart<0)throw Error('Mia light rig missing');
 // The warm self-lit lantern and air streaks retain their original colors.
 let body=ambientMultiply(master.slice(bodyStart,lampStart),p.ambient)+master.slice(lampStart);
 const prefix=master.slice(0,bodyStart),defs=[];
 function stops(values){return values.map(([offset,strength])=>'<stop offset="'+offset+'" stop-color="'+p.color+'" stop-opacity="'+(p.strength*strength).toFixed(3)+'"/>').join('')}
 function linear(id,y1,y2,values){
  defs.push('<linearGradient id="light-'+id+'" data-light="true" gradientUnits="userSpaceOnUse" x1="590" y1="'+y1+'" x2="590" y2="'+y2+'" spreadMethod="pad">'+stops(values)+'</linearGradient>');
 }
 function radial(id,cx,cy,rx,ry,angle,values){
  const base='translate('+cx+' '+cy+') rotate('+angle+') scale('+rx+' '+ry+')';
  defs.push('<radialGradient id="light-'+id+'" data-light="true" data-light-base="'+base+'" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform="'+base+'" spreadMethod="pad">'+stops(values)+'</radialGradient>');
 }
 function overlay(clip,id,amount=1){
  // A small normal component preserves reflected hue on light feathers.
  // Screen then adds light to darker material without hiding its markings.
  const r='<rect x="-400" y="-400" width="2000" height="1800" fill="url(#light-'+id+')"';
  return '<g data-reflection="'+id+'" pointer-events="none" clip-path="url(#'+clip+')">'+r+' opacity="'+(.46*amount).toFixed(3)+'"/>'+r+' opacity="'+(.90*amount).toFixed(3)+'" style="mix-blend-mode:screen"/></g>';
 }
 function isolate(id){const needle='<g id="'+id+'">';body=body.replace(needle,'<g id="'+id+'" style="isolation:isolate">');}
 function insertBefore(needle,extra){
  if(!body.includes(needle))throw Error('Mia light anchor '+needle);
  body=body.replace(needle,()=>extra+needle);
 }
 function endOf(group,next,extra){
  const a=body.indexOf('<g id="'+group+'"'),b=body.indexOf('<g id="'+next+'"',a+1);
  if(a<0||b<0||body.slice(b-4,b)!=='</g>')throw Error('Mia light group '+group);
  body=body.slice(0,b-4)+extra+body.slice(b-4);
 }
 // The entire wing surface receives light, with a lower-side emphasis.
 linear('wing',130,735,[[0,.15],[.35,.25],[.70,.59],[1,.92]]);
 linear('far-wing',450,685,[[0,.13],[.45,.36],[1,.80]]);
 isolate('near-wing');endOf('near-wing','wing-strap',overlay('wing-clip','wing'));
 isolate('far-wing');defs.push('<clipPath id="light-far-wing-clip" clipPathUnits="userSpaceOnUse"><use href="#far-wing-curve-0"/></clipPath>');
 endOf('far-wing','goose-body',overlay('light-far-wing-clip','far-wing'));
 // Rounded reflected light on the belly, with a narrower lobe along the neck.
 const goose=body.match(/<g id="goose-body"><path d="([^"]+)"/)[1];
 defs.push('<clipPath id="light-goose-clip" clipPathUnits="userSpaceOnUse"><path d="'+goose+'"/></clipPath>');
 radial('belly',617,747,415,285,-8,[[0,.95],[.38,.86],[.68,.45],[1,0]]);
 radial('neck',865,550,230,310,30,[[0,.64],[.42,.45],[.76,.16],[1,0]]);
 isolate('goose-body');insertBefore('<path d="M735 447 C752 437 765 419 774 403',overlay('light-goose-clip','belly')+overlay('light-goose-clip','neck',.75));
 // Local facial light is separate from the goose; eyes and mouth are painted
 // afterward, keeping their contrast and preserving the boost expression.
 linear('face',136,325,[[0,.08],[.32,.15],[.58,.38],[.82,.71],[1,.94]]);
 isolate('mia-head');insertBefore('<g id="open-eye-near">',overlay('mia-fur-face-clip','face'));
 linear('body',318,465,[[0,.05],[.45,.25],[1,.77]]);
 isolate('mia-body');endOf('mia-body','satchel',overlay('body-clip','body',.80));
 // Lesser reflection on the remaining animated cloth and fur.
 linear('accessories',100,440,[[0,.07],[.5,.18],[1,.54]]);
 for(const [group,next,clip] of [['scarf-streamers','goose-feet','scarf-streamers-shadow-clip'],['mia-tail','mia-body','tail-clip'],['scarf-collar','wing-root-strap','scarf-collar-shadow-clip']]){
  isolate(group);endOf(group,next,overlay(clip,'accessories',.55));
 }
 return prefix+'<defs>'+defs.join('')+'</defs>'+body;
}
function markup(ocean=false,prefix='mia',world=ocean?'ocean':''){
 const content=reflect(MASTER.replace('<!--DIVE_MASK-->',ocean?DIVE_MASK:''),world)
 .replace(/\bid="([^"]+)"/g,(_,id)=>'id="'+prefix+'-'+id+'"')
 .replace(/url\(#([^)]+)\)/g,(_,id)=>'url(#'+prefix+'-'+id+')')
 .replace(/\bhref="#([^"]+)"/g,(_,id)=>'href="#'+prefix+'-'+id+'"');
 return '<g id="'+prefix+'Rig" pointer-events="none" transform="translate(0 -23) scale(0.1109333334) translate(-590 -375)">'+content+'</g>';
}
const rigs=new WeakMap();
function makeRig(root){
 const nodes=new Map([...root.querySelectorAll('[id]')].map(el=>[el.id.slice(root.id.slice(0,-3).length+1),el]));
 const $=id=>nodes.get(id);
 const collect=selector=>[...root.querySelectorAll(selector)].map(el=>({el,kind:el.dataset.motion,source:el.getAttribute('d'),tokens:el.getAttribute('d').match(/[A-Za-z]|-?(?:\d*\.)?\d+(?:e[-+]?\d+)?/gi)}));
 const paths=collect('[data-motion]'),earPaths=collect('[data-ear]'),lightFields=[...root.querySelectorAll('[data-light]')].map(el=>({el,base:el.getAttribute('data-light-base')||''}));
 let lastBoost=-1;
 function beatPhase(p){return TAU*(p+.042*(1-Math.cos(TAU*p)))}
function stroke(p){return Math.cos(beatPhase(p))}
function bend(x,y,kind,p){
 const near=kind==='near-wing',cx=near?600:449,cy=near?516:572;
 const dx=x-cx,dy=y-cy,rad=Math.hypot(dx,dy),u=Math.min(1,rad/(near?560:205));
 const span=Math.max(0,(u-.06)/.94),smooth=span*span*(3-2*span);
 const phase=p-(near?0:.045);
 const shoulder=stroke(phase),elbow=stroke(phase-.045*smooth),wrist=stroke(phase-.095*smooth);
 const blend=.20*shoulder+.43*elbow+.37*wrist;
 const angle=(near?(-.39+.56*blend):(-.12+.40*blend))*(.38+.62*smooth);
 const c=Math.cos(angle),sn=Math.sin(angle),rx=dx*c-dy*sn,ry=dx*sn+dy*c;
 // A quadrature sweep gives the feather tips a rounded, closed trajectory:
 // forward during the downstroke, back toward the tail during recovery.
 // Varying the sweep and timing along the span bends the wing rather than
 // rotating it as a rigid cutout. No recovery-stroke scale or compression.
 const sweep=(near?37:13)*smooth*Math.sin(beatPhase(phase-.045*smooth));
 return [cx+rx+sweep,cy+ry];
}
// A travelling fabric wave, with a fixed neck attachment and increasingly
// free motion towards the two trailing ends. The silhouette, clip and
// both shadow shapes use exactly the same deformation.
function scarfBend(x,y,p){
 // A travelling elliptical fabric wave with a fixed neck attachment.
 const u=Math.max(0,Math.min(1,(565-x)/380));
 const envelope=u*u*(3-2*u);
 const theta=TAU*(p-.78*u);
 const vertical=envelope*(65*Math.sin(theta)+7*Math.sin(2*theta-.5));
 const horizontal=envelope*(-10+25*Math.cos(theta+.12));
 return [x+horizontal,y+vertical];
}
// Independent, brief muscular flicks, separated by actual stillness.
// Signed impulses alternate up and down, never following the wind cycle.
const tailRootX=477,tailRootY=418,tailAxisX=-.85,tailAxisY=-Math.sqrt(1-.85*.85),tailNormalX=-tailAxisY,tailNormalY=tailAxisX;
const tailStep=2,tailSegments=160,tailPeriod=9.7;
// [start in seconds, duration, angle]. Positive angles lift the tail.
const tailEvents=[[.38,.49,.83],[1.47,.43,-.72],[2.79,.56,.95],[3.61,.39,.68],[5.15,.49,-.84],[6.88,.53,.88],[8.04,.45,-.75]];
let tailCachedPhase=NaN,tailSpine=[],tailDrive=0,tailFollow=0;
function tailEase(t){t=Math.max(0,Math.min(1,t));return t*t*(3-2*t)}
function tailImpulse(t){
 let value=0;
 for(const [start,duration,amplitude] of tailEvents){
  const u=(t-start)/duration;
  if(u>0&&u<1){
   // A quick lift/drop followed by a softer return; zero speed at both ends.
   const q=u<.42?u/.42:(1-u)/.58;
   // Quintic easing: speed and acceleration both vanish at turnarounds.
   value+=amplitude*q*q*q*(10+q*(-15+6*q));
  }
 }
 return value;
}
function tailAngle(s){
 // The distal half initiates the flick and bends around the midpoint.
 // The proximal section answers later and with much smaller amplitude.
 return tailDrive*.82*tailEase((s-87)/132)
       +tailFollow*.18*tailEase((s-25)/125);
}
function prepareTailSpine(p){
 if(p===tailCachedPhase)return;tailCachedPhase=p;
 const t=((p%1+1)%1)*tailPeriod;
 tailDrive=tailImpulse(t);tailFollow=tailImpulse(t-.072);
 let x=tailRootX,y=tailRootY;tailSpine=[[x,y]];
 for(let i=0;i<tailSegments;i++){const a=tailAngle((i+.5)*tailStep),c=Math.cos(a),sn=Math.sin(a);x+=tailStep*(tailAxisX*c+tailNormalX*sn);y+=tailStep*(tailAxisY*c+tailNormalY*sn);tailSpine.push([x,y])}
}
function tailBend(x,y,p){
 const dx=x-tailRootX,dy=y-tailRootY,s=dx*tailAxisX+dy*tailAxisY,w=dx*tailNormalX+dy*tailNormalY;
 if(s<=18)return [x,y];prepareTailSpine(p);
 const i=Math.min(tailSegments-1,Math.floor(s/tailStep)),f=(s-i*tailStep)/tailStep,a=tailAngle(s),c=Math.cos(a),sn=Math.sin(a),q=tailSpine[i],z=tailSpine[i+1];
 // Rotate each cross-section rigidly: no thickness scale, no squash/stretch.
 return [q[0]+f*(z[0]-q[0])+w*(-tailAxisX*sn+tailNormalX*c),q[1]+f*(z[1]-q[1])+w*(-tailAxisY*sn+tailNormalY*c)];
}
// Subdivide original cubic curves and transport their tangents.
function tailPieces(tokens){
 let i=0,at=[0,0],start=[0,0],out=[];const point=()=>[+tokens[i++],+tokens[i++]],lerp=(a,b,t)=>a.map((v,j)=>v+(b[j]-v)*t);
 function add(a,b,c,d){const len=Math.hypot(b[0]-a[0],b[1]-a[1])+Math.hypot(c[0]-b[0],c[1]-b[1])+Math.hypot(d[0]-c[0],d[1]-c[1]),n=Math.max(1,Math.ceil(len/16));let q=[a,b,c,d];for(let j=0;j<n;j++){const t=1/(n-j),ab=lerp(q[0],q[1],t),bc=lerp(q[1],q[2],t),cd=lerp(q[2],q[3],t),abc=lerp(ab,bc,t),bcd=lerp(bc,cd,t),end=lerp(abc,bcd,t);out.push(['C',q[0],ab,abc,end]);q=[end,bcd,cd,q[3]];}}
 function line(d){add(at,lerp(at,d,1/3),lerp(at,d,2/3),d);at=d}
 while(i<tokens.length){const cmd=tokens[i++].toUpperCase();if(cmd==='M'){at=point();start=at;out.push(['M',at]);}else if(cmd==='L')line(point());else if(cmd==='C'){const b=point(),c=point(),d=point();add(at,b,c,d);at=d;}else if(cmd==='Q'){const b=point(),d=point();add(at,lerp(at,b,2/3),lerp(d,b,2/3),d);at=d;}else if(cmd==='Z'){line(start);out.push(['Z']);}else throw Error('Unsupported tail command '+cmd);}
 return out;
}
function deformTail(path,p){
 prepareTailSpine(p);if(tailDrive===0&&tailFollow===0)return path.source;
 const pieces=path.tailPieces||(path.tailPieces=tailPieces(path.tokens));const map=a=>tailBend(a[0],a[1],p),fmt=a=>a.map(v=>v.toFixed(2)).join(' '),eps=.001;
 function handle(a,b,ma){const q=map([a[0]+eps*(b[0]-a[0]),a[1]+eps*(b[1]-a[1])]);return [ma[0]+(q[0]-ma[0])/eps,ma[1]+(q[1]-ma[1])/eps];}
 return pieces.map(v=>{if(v[0]==='Z')return 'Z';if(v[0]==='M')return 'M'+fmt(map(v[1]));const [,a,b,c,d]=v,ma=map(a),md=map(d);return 'C'+fmt(handle(a,b,ma))+' '+fmt(handle(d,c,md))+' '+fmt(md)}).join(' ');
}
function deform(path,p){if(path.kind==="tail")return deformTail(path,p);let result=[],i=0;while(i<path.tokens.length){const t=path.tokens[i++];if(/[A-Za-z]/.test(t)){result.push(t);continue}const y=path.tokens[i++];if(y===undefined||/[A-Za-z]/.test(y))throw Error('Invalid coordinate in '+path.el.id);const q=path.kind==='scarf'?scarfBend(+t,+y,p):bend(+t,+y,path.kind,p);result.push(q[0].toFixed(2),q[1].toFixed(2))}return result.join(' ')}

 function lanternAngle(p){return 9*Math.sin(TAU*p)+1.1*Math.sin(2*TAU*p+.6);}

 function smooth01(x){x=Math.max(0,Math.min(1,x));return x*x*(3-2*x)}
function earPoint(x,y,k){
 const far=smooth01((x-692)/38);
 const cx=650+(775-650)*far,cy=143+(118-143)*far;
 const w=smooth01((cy-y)/(cy-20));
 const angle=-k*w*(.28-.065*far),c=Math.cos(angle),sn=Math.sin(angle),dx=x-cx,dy=y-cy;
 return [cx+dx*c-dy*sn,cy+dx*sn+dy*c];
}
function applyBoost(k){
 if(k===lastBoost)return;lastBoost=k;
 for(const p of earPaths){
  if(k===0){p.el.setAttribute('d',p.source);continue;}
  let out=[],i=0;while(i<p.tokens.length){const t=p.tokens[i++];if(/[A-Za-z]/.test(t)){out.push(t);continue;}const y=p.tokens[i++];const q=earPoint(+t,+y,k);out.push(q[0].toFixed(3),q[1].toFixed(3));}p.el.setAttribute('d',out.join(' '));
 }
 // Collapse the opening toward the lid line, then blend to curved eyelids.
 const closed=smooth01((k-.68)/.30);
 for(const kind of ['near','far']){
  const open=$('open-eye-'+kind),lid=$('closed-eye-'+kind),cy=kind==='near'?209:207;
  if(k===0)open.removeAttribute('transform');else open.setAttribute('transform',`translate(0 ${cy}) scale(1 ${Math.max(.035,1-k)}) translate(0 ${-cy})`);
  open.setAttribute('opacity',String(1-closed));lid.setAttribute('opacity',String(closed));
 }
}

 const windLanes=[[64,118,5,0.76,0.11,0.55],[125,80,4,1.12,0.48,0.42],[221,150,6,0.93,0.79,0.62],[310,103,5,1.18,0.32,0.48],[414,165,7,0.92,0.58,0.66],[495,104,5,1.24,0.09,0.52],[580,140,6,1.08,0.72,0.62],[675,95,4,0.86,0.39,0.5],[759,156,6,1.02,0.15,0.64],[825,90,5,1.21,0.64,0.47],[195,12,5,1.09,0.23,0.5],[372,9,4,0.88,0.82,0.42],[625,15,5,1.26,0.46,0.48],[792,11,4,1.03,0.91,0.4]];
const windPaths=windLanes.map((_,i)=>$('wind-'+i));

function windPose(i,t,k){
 const [y,length,width,speed,offset,alpha]=windLanes[i];
 const u=((t*speed*1.15+offset)%1+1)%1;
 const x=1210-u*(1370+length);
 const drift=9*Math.sin(TAU*(u+offset));
 const fade=smooth01(u/.12)*smooth01((1-u)/.15);
 return {x,y:y+drift,opacity:fade*alpha};
}
function renderWind(k,windTime){
 const group=$('boost-wind');
 const enabled=true;
 group.setAttribute('opacity',String(enabled?k:0));
 if(!enabled||k<=0)return;
 for(let i=0;i<windPaths.length;i++){
  const p=windPose(i,windTime,k);
  windPaths[i].setAttribute('transform',`translate(${p.x.toFixed(2)} ${p.y.toFixed(2)})`);
  windPaths[i].setAttribute('opacity',p.opacity.toFixed(3));
 }
}

 function bodyBob(p){return -15*Math.cos(TAU*(p-.57))-2*Math.cos(2*TAU*(p-.57));}

 function paint(clock,boost,reduced=false,staticPose=false,tilt=0){
  const time=Number.isFinite(clock)?clock:0,k=reduced||staticPose?0:Math.max(0,Math.min(1,boost||0));
  const phase=(time*RATE*1.35)%1,scarfPhase=(time*RATE*1.65)%1,tailPhase=(time*RATE*2/tailPeriod)%1,lanternPhase=(time*RATE*1.18)%1;
  const still=reduced||staticPose,body=$('flight-body'),lamp=$('lantern');
  if(still){body.removeAttribute('transform');lamp.removeAttribute('transform');}else{body.setAttribute('transform','translate(0 '+bodyBob(phase).toFixed(3)+')');lamp.setAttribute('transform','rotate('+lanternAngle(lanternPhase).toFixed(4)+' 738 545)');}
  const counter='translate(0 '+(still?0:-bodyBob(phase)).toFixed(3)+') rotate('+(-tilt).toFixed(3)+' 590 375)';
  for(const light of lightFields)light.el.setAttribute('gradientTransform',counter+(light.base?' '+light.base:''));
  applyBoost(k);renderWind(k,time);
  for(const path of paths){const d=still?path.source:deform(path,path.kind==='scarf'?scarfPhase:path.kind==='tail'?tailPhase:phase);if(path.lastD!==d){path.el.setAttribute('d',d);path.lastD=d;}}
 }
 return {paint};
}
function paint(root,clock,boost,reduced=false,staticPose=false,tilt=0){
 if(!root)return;let rig=rigs.get(root);if(!rig){rig=makeRig(root);rigs.set(root,rig);}rig.paint(clock,boost,reduced,staticPose,tilt);
}
function updateBoost(f,dt,active){
 const target=!!active;if(f.miaBoostTarget!==target){f.miaBoostTarget=target;f.miaBoostStart=f.miaBoostAmount||0;f.miaBoostElapsed=0;}
 const duration=target?.22:.30;f.miaBoostElapsed=Math.min(duration,(f.miaBoostElapsed||0)+Math.max(0,dt));
 const p=Math.max(0,Math.min(1,f.miaBoostElapsed/duration)),e=p*p*(3-2*p);
 f.miaBoostAmount=(f.miaBoostStart||0)+((target?1:0)-(f.miaBoostStart||0))*e;return f.miaBoostAmount;
}
global.NoteRushMiaFlight=Object.freeze({markup,paint,updateBoost,rate:RATE});
})(window);
