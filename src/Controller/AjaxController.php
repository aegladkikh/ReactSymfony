<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class AjaxController
 * @package App\Controller
 */
class AjaxController extends AbstractController
{
    /**
     * @Route("/api/get-notes", name="ajax.notes", methods={"GET","POST"})
     */
    public function getNotes(): JsonResponse
    {
        // return $this->render('raw/notes.html.twig');
        return new JsonResponse(
            [
                'items' => [
                    [
                        'id' => 1,
                        'title' => 'test1',
                        'date' => '12.02.2020'
                    ],
                    [
                        'id' => 2,
                        'title' => 'test2',
                        'date' => '12.02.2020'
                    ]
                ]
            ]
        );
    }
}
